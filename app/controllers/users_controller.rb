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
    user3 =  {name: current_user.name,
              id: current_user.id,
              surname: current_user.surname,
              email: current_user.email,
              avatar: current_user.avatar.url}
    render json: user3
  end

  def show
    user = User.find(params[:id])
    user2 =  {name: user.name,
              id: user.id,
              surname: user.surname,
              email: user.email,
              avatar: user.avatar.url}
    render json: user2
  end

  def ifLogged?
    p "#{defined?(current_user.name)}"
    if(defined?(current_user.name) == nil)
      render json: false
    else
      render json: true
    end
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
