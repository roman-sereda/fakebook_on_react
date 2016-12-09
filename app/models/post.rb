class Post < ActiveRecord::Base
  belongs_to :user

  default_scope -> { order('created_at DESC') }

  validates :title, presence: true, if: :has_photo?
  validates :body, presence: true, if: :has_photo?
  validates :images, presence: true, if: :has_text?
  validates :title, length: {minimum: 2, maximum: 25}
  validates :body, length: {maximum: 200}
  validates :body, format: { without: /(((https?)?:\057\057)|(www.))[a-z_.]+[a-z_]{2,3}/i },if: :has_video?
  validates :title, format: { without: /(((https?)?:\057\057)|(www.))[a-z_.]+[a-z_]{2,3}/i },if: :has_video?


  def has_photo?
    photo == nil
  end

  def has_video?
    body =~ /http(?:s?):\/\/(?:www\.)?youtu(?:be\.com\/watch\?v=|\.be\/)([\w\-\_]*)(&(amp;)?‌​[\w\?‌​=]*)?/
  end

  def has_text?
    body == nil && title == nil
  end

  def self.from_users_followed_by(user)
    friend_ids = user.friends{|a| a.id} | user.inverse_friends{|a| a.id}
    friend_ids << user.id
    Post.where(:posts => { :user_id => friend_ids })
  end
end
