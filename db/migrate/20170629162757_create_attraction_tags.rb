class CreateAttractionTags < ActiveRecord::Migration[5.1]
  def change
    create_table :attraction_tags do |t|
      t.references :tag, foreign_key: true, null: false
      t.references :attraction, foreign_key: true, null: false

      t.timestamps
    end
  end
end
