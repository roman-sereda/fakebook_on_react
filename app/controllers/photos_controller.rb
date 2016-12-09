class PhotosController < ApplicationController

  skip_before_action :verify_authenticity_token

  def get_short_photos_list
    @user = User.find(params[:user_id])
    @photos = @user.photos
    render json: @photos.limit(8)
  end

  def get_full_photos_list
    @user = User.find(params[:user_id])
    @photos = @user.photos
    render json: @photos
  end

  def create
    @photo = User.find(params[:user_id]).photos.create(user_id: params[:user_id],
                                                          image: params[:image])
    if @photo.save
      render json: @photo.to_json
    else
      render json: []
    end
  end


end
