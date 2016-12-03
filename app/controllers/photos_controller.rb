class PhotosController < ApplicationController

  skip_before_action :verify_authenticity_token

  def index
    @user = User.find(params[:user_id])
    @photos = @user.photos
    render json: @photos.to_json
  end

  def create
    @photo = User.find(params[:user_id]).photos.create(photo_params)

    if @photo.save
      p "PHOTO IS SAVED"
      render json: @photo.to_json
    else
      p "PHOTO NOT SAVED"
      render json: @photo.to_json
    end
  end

  def photo_params
    params.require(:photo).permit(:user_id, :image)
  end

end