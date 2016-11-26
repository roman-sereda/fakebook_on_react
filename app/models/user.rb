class User < ActiveRecord::Base

  mount_uploader :avatar, AvatarUploader

  VALID_EMAIL_REGEX = /\A[\w+\-.]+@[a-z\d\-.]+\.[a-z]+\z/i

  validates :name, presence: true, length: { minimum: 5, maximum: 50 }
  validates :surname, presence: true, length: { minimum: 5, maximum: 50 }
  validates :email, presence:   true, format:     { with: VALID_EMAIL_REGEX }, uniqueness: { case_sensitive: false }


end
