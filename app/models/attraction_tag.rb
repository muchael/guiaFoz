class AttractionTag < ApplicationRecord
  belongs_to :tag
  belongs_to :attraction
end
