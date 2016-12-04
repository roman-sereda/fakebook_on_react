class UsersController < ApplicationController

  skip_before_action :verify_authenticity_token

  def index
    @users = User.all
    render json: @users.to_json
  end

  def home
    render 'home'
  end

  def get_current_user
    p "current_user: #{current_user}"
    render json: current_user
  end

  def show
    @user = User.find(params[:id])
    render json: @user
  end

  def iflogged
    p "current_user: #{defined?(current_user)}"
    render json: (defined?(current_user) == nil ? false : true).to_json
  end

  def create
      @user = User.create(name: user_params[:name],
                       surname: user_params[:surname],
                       email: user_params[:email],
                       password: user_params[:password],
                       password_confirmation: user_params[:password_confirmation],
                       avatar: File.open('default-avatar.jpg'))

    if @user.save
      render json: @users.to_json
    else
      p @user.errors.full_messages
      render json: @users.to_json
    end
  end

  def update
    @user = User.find(params[:id])
    if @user.update_attributes(user_params)
      render json: @user.to_json
    else
      render json: @user.to_json
    end
  end

  def user_params
    params.require(:user).permit(:name, :surname, :email, :password, :password_confirmation)
  end

end
