class AddAttachmentSpriteToUsers < ActiveRecord::Migration
  def self.up
    change_table :players do |t|
      t.attachment :sprite
    end
  end

  def self.down
    remove_attachment :players, :sprite
  end
end
