class Attraction < ApplicationRecord
  attr_accessor :start_day

  belongs_to :place

  has_many :attraction_times
  has_many :attraction_tags
  has_many :tags, through: :attraction_tags

  # Agrupamentos e seleção:
  # Dividimos o intervalo em dias, cada dia com 3 passeios (manhã, tarde e noite)
  # manhã é 08:00 - 12:00
  # tarde é 14:00 - 18:00
  # noite é 20:00 - 24:00
  # para cada slot de cada dia, buscamos uma lista de atrativos
  # passando cada slot, adicionamos um WHERE id NOT IN (primeiro de cada lista de atrativos sugeridos)
  # o primeiro item da lista é o que será retornado para o front
  # condições de filtro:
  # where exists (select 1 from attraction_tags where tag id in (:tag_ids) and attraction_id = attractions.id)
  # order by abs(:split_budget - adult_price),
  # (select count(*) from attraction_feedbacks where attraction_id = attractions.id) desc
  # TODO filtrar por place único no passeio?
  def self.query(arrival, departure, budget, tag_ids)
    length = (departure - arrival).to_i
    split_budget = budget/((length + 1)*3)
    start_times = [
        %w(08:00 12:00),
        %w(14:00 18:00),
        %w(20:00 24:00)
    ]

    seen_ids = [-1]

    attractions_by_day = (0..length).to_a.map do |offset|
      day = arrival + offset.days
      weekday_number = AttractionTime.weekdays.to_a.select{|k,_v| day.send(k + '?')}[0][1]

      times = start_times.map do |start_time, end_time|
        params = {
            weekday: weekday_number,
            start_time: start_time,
            end_time: end_time,
            split_budget: split_budget,
            seen_ids: seen_ids,
            tag_ids: tag_ids
        }
        attractions = Attraction.find_by_sql([<<EOF, params])
SELECT
  attractions.*,
  attraction_times.start_time,
  attraction_times.id as time_id
FROM
  attractions
JOIN attraction_times ON attraction_times.id = (
  SELECT id FROM attraction_times WHERE attraction_times.attraction_id = attractions.id AND
    weekday = :weekday AND (:start_time :: interval + travel_time :: interval + duration :: interval + travel_time :: interval) <= :end_time :: interval ORDER BY start_time DESC LIMIT 1)
WHERE
  -- existe horário no dia de semana atual e horário entre (hora de início e término) e (hora de início + deslocamento + tempo de passeio + deslocamento) <= hora de término
  EXISTS (SELECT 1 FROM attraction_tags WHERE attraction_id = attractions.id AND tag_id IN (:tag_ids)) AND
  attractions.id NOT IN (:seen_ids)
ORDER BY
  abs(:split_budget - adult_price) -- AND count(*) from feedbacks
LIMIT 20
EOF
        seen_ids.push(attractions[0] && attractions[0].id)
        attractions.each{|x| x.day = day}
        attractions
      end
      {day: day, periods: times}
    end

    # agora que já listamos de maneira agrupada os atrativos, vamos salvar o itinerário

    transaction do
      itinerary = Itinerary.new(start: arrival, end: departure)
      itinerary.save
      flattened_days = attractions_by_day.map{|x| x[:periods].map{|y| y[0]}}.flatten.map{|x|
        time = AttractionTime.find(x.time_id)
        ItineraryAttraction.create(itinerary: itinerary, attraction_time: time, start: x.start_day)
      }
    end
  end
end
