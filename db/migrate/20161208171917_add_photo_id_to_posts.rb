class AddPhotoIdToPosts < ActiveRecord::Migration
  def change
    add_column :posts, :photo_id, :integer
  end
end
