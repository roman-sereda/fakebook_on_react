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
    @friendship = user.friendships.map {|friend|
      user_temp = User.find(friend.friend_id)
      {id: friend.friend_id,
       login: "#{user_temp.name} #{user_temp.surname}",
       avatar: user_temp.avatar.url}}
    render json: @friendship.to_json
  end

  def create
    if (Friendship.where(:user_id => params[:user_id], :friend_id => params[:friend_id]).exists?)
      render json: @friendship.to_json
    end
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
