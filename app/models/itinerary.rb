class Itinerary < ApplicationRecord
  belongs_to :user
  has_many :itinerary_attractions
end
