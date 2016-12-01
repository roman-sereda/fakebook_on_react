class FriendshipsController < ApplicationController
  before_action :set_friendship, only: [:show, :edit, :update, :destroy]
  skip_before_action :verify_authenticity_token

  def index
    @friendships = Friendship.all
  end

  def new
    @friendship = Friendship.new
  end

  def create
    p "111111111111111"
    @friendship = User.find(params[:user_id]).friendships.build(:friend_id => params[:friend_id])
    if @friendship.save
      p "22222222222222"
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

  private
    def set_friendship
      @friendship = Friendship.find(params[:id])
    end
end
