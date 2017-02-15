class Player < ApplicationRecord
  has_attached_file :sprite, styles: { medium: "300x300>", thumb: "100x100>" }, default_url: "/images/:style/missing.png"
  validates_attachment_content_type :sprite, content_type: /\Aimage\/.*\z/
end
