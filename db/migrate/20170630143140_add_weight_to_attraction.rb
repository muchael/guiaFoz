class AddWeightToAttraction < ActiveRecord::Migration[5.1]
  def change
    add_column :attractions, :weight, :integer, default: 0

    Attraction.where(id: [23, 36, 13]).each do |a|
      a.update(weight: -5)
    end
  end
end
