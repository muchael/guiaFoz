class AddDescriptionToAttractions < ActiveRecord::Migration[5.1]
  def change
    add_column :attractions, :description, :text
    add_column :attractions, :observations, :text
  end
end
