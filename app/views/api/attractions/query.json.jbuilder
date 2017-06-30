json.itinerary_id @attractions_by_day[:itinerary_id]
json.attractions do
  json.array! @attractions_by_day[:attractions] do |day|
    json.day day[:day]
    json.periods do
      json.array! day[:periods] do |period|
        json.array! period do |attraction|
          json.extract! attraction, :id, :name, :duration, :start_time, :adult_price, :adults_only, :picture, :description, :observations, :likes
          json.place do
            json.extract! attraction.place, :id, :name, :picture, :phone, :website
          end
          json.tags do
            json.array! attraction.tags do |tag|
              json.extract! tag, :id, :name
            end
          end
        end
      end
    end
  end
end