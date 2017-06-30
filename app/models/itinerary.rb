class Itinerary < ApplicationRecord
  belongs_to :user, optional: true
  has_many :itinerary_attractions
end
