class PhotosController < ApplicationController

  def new
    Photo.create.params[photo_params]
  end

  def create
    @photo = current_user.photos.create(photo_params)
    @photo.user = current_user
    if @photo.save
      flash[:success] = "Profile Created"
      redirect_to '/'
    else
      render 'new'
    end
  end

  def photo_params
    params.require(:photo).permit(:user_id, :image)
  end

end
