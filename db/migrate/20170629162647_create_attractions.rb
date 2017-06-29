class CreateAttractions < ActiveRecord::Migration[5.1]
  def change
    create_table :attractions do |t|
      t.string :name, null: false
      t.time :duration, null: false
      t.time :travel_time, null: false
      t.numeric :adult_price, null: false
      t.boolean :adults_only, default: false
      t.string :picture
      t.references :place, foreign_key: true, null: false

      t.timestamps
    end
  end
end
