class UsersController < ApplicationController

  def index
    @users = User.all
    render json: @users.to_json
  end

  def home
    render 'home'
  end

  def show
    @user = User.find(params[:id])
    render json: @user.to_json
  end

  def create
    @user = User.new(user_params)
    if @user.save
      render json: @users.to_json
    else
      p @user.errors.full_messages
      render json: @users.to_json
    end
  end

  def update
    @user = User.find(params[:user_id]);
    p "33333333333333333333333333333"
    if @user.update_attributes(user_params)
      p "4444444444444444444444444444444"
      render json: @user.to_json
    else
      render json: @user.to_json
    end
  end

  def user_params
    params.require(:user).permit(:name, :surname, :email, :password, :password_confirmation)
  end

end
