json.extract! place, :id, :name, :picture, :latitude, :longitude, :phone, :website, :created_at, :updated_at
json.url place_url(place, format: :json)
