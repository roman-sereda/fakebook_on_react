class CreatePhotos < ActiveRecord::Migration
  def change
    create_table :photos do |t|
      t.string :user_id
      t.string :image
    end
  end
end
