class CreateAttractionTimes < ActiveRecord::Migration[5.1]
  def change
    create_table :attraction_times do |t|
      t.integer :weekday, null: false
      t.time :start_time, null: false
      t.boolean :holidays, null: false
      t.references :attraction, foreign_key: true, null: false

      t.timestamps
    end
  end
end
