class User < ApplicationRecord
  has_many :itineraries
  has_many :itinerary_attractions, through: :itineraries
  has_many :attractions, through: :itinerary_attractions
end
