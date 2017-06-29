class CreateItineraries < ActiveRecord::Migration[5.1]
  def change
    create_table :itineraries do |t|
      t.timestamp :start, null: false
      t.timestamp :end, null: false
      t.references :user, foreign_key: true

      t.timestamps
    end
  end
end
