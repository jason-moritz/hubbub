class AddPublicImageToUsers < ActiveRecord::Migration[6.1]
  def change
    add_column :users, :public_img, :string
  end
end
