class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :name
      t.string :surname
      t.string :email, unique: true
      t.string :password_digest
      t.string :remember_token
      t.string :avatar

      t.datetime :created_at
      t.datetime :updated_at
    end

    add_index  :users, :remember_token
  end
end
