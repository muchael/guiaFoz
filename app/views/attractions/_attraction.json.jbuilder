json.extract! attraction, :id, :name, :duration, :travel_time, :adult_price, :adults_only, :picture, :place_id, :created_at, :updated_at
json.url attraction_url(attraction, format: :json)
json.times do
  json.array! attraction.attraction_times
end