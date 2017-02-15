class CreatePlayers < ActiveRecord::Migration[5.0]
  def change
    create_table :players do |t|
      t.string :name
      t.string :items
      t.integer :score
      t.integer :level
      t.string :sprite_image
      
      t.timestamps
    end
  end
end
