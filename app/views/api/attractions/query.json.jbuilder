json.array! @attractions_by_day do |day|
  json.day day[:day]
  json.periods do
    json.array! day[:periods] do |period|
      json.array! period do |attraction|
        json.extract! attraction, :id, :name, :duration, :start_time, :adult_price, :adults_only, :picture, :description, :observations
        json.place do
          json.extract! attraction.place, :id, :name, :picture, :phone, :website
        end
      end
    end
  end
end