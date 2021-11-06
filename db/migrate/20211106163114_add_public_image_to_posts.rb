class AddPublicImageToPosts < ActiveRecord::Migration[6.1]
  def change
    add_column :posts, :public_img, :string
  end
end
