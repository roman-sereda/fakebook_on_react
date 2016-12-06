class FriendshipsController < ApplicationController
  skip_before_action :verify_authenticity_token

  def index
    @friendships = Friendship.all
  end

  def new
    @friendship = Friendship.new
  end

  def show
    user = User.find(params[:id])
    p "FRINEDSHIP: #{user.friendships}"
    @friendship = user.friendships
    render json: @friendship.to_json
  end

  def create
    @friendship = User.find(params[:user_id]).friendships.create(:friend_id => params[:friend_id])
    @friendship2 = User.find(params[:friend_id]).friendships.create(:friend_id => params[:user_id])
    if @friendship.save && @friendship2.save
      render json: @friendship.to_json
    else
      render json: @friendship.to_json
    end
  end

  def destroy
    @friendship = current_user.friendships.find(params[:id])
    @friendship.destroy
    flash[:notice] = "Removed friendship."
    redirect_to current_user
  end
end
