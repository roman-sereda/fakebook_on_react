class FriendshipsController < ApplicationController
  before_action :set_friendship, only: [:show, :edit, :update, :destroy]
  skip_before_action :verify_authenticity_token

  def index
    @friendships = Friendship.all
  end

  def new
    @friendship = Friendship.new
  end

  def show
    @friendship = User.find(params[:id]).friendships
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

  private
    def set_friendship
      @friendship = Friendship.find(params[:id])
    end
end
