class Tag < ApplicationRecord
  has_many :attraction_tags
  has_many :attractions, through: :attraction_tags
  has_many :places, through: :attractions
end
