class CreatePlaces < ActiveRecord::Migration[5.1]
  def change
    create_table :places do |t|
      t.string :name
      t.string :picture
      t.numeric :latitude
      t.numeric :longitude
      t.string :phone
      t.string :website

      t.timestamps
    end
  end
end
