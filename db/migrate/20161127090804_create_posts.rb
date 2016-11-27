class CreatePosts < ActiveRecord::Migration
  def change
    create_table :posts do |t|
      t.string   :title
      t.string   :body
      t.string   :image
      t.integer  :user_id
      t.datetime :created_at
      t.datetime :updated_at
    end

    add_index :posts, [:user_id, :created_at]
  end
end
