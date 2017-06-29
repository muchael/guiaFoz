class CreateItineraryAttractions < ActiveRecord::Migration[5.1]
  def change
    create_table :itinerary_attractions do |t|
      t.references :itinerary, foreign_key: true, null: false
      t.references :attraction_time, foreign_key: true, null: false
      t.timestamp :start, null: false

      t.timestamps
    end
  end
end
