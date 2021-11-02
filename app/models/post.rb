class Post < ApplicationRecord
  belongs_to :user
  validates :content, presence: :true, length: { maximum: 300 }
  validates :title, presence: :true, length: { maximum: 50 }
end
