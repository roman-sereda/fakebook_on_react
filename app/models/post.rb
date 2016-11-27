class Post < ActiveRecord::Base
  belongs_to :post

  default_scope -> { order('created_at DESC') }

  validates :title, length: {minimum: 2, maximum: 25}
  validates :body, length: {maximum: 200}

  def self.from_users_followed_by(user)
    friend_ids = user.friends{|a| a.id} | user.inverse_friends{|a| a.id}
    friend_ids << user.id
    Post.where(:posts => { :user_id => friend_ids })
  end
end
