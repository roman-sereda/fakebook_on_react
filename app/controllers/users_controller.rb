class UsersController < ApplicationController

  skip_before_action :verify_authenticity_token

  def index
    @users = User.all
    render json: @users
  end

  def home
    render 'home'
  end

  def get_current_user
    if(signed_in?)
      user =  {name: current_user.name,
                id: current_user.id,
                surname: current_user.surname,
                email: current_user.email,
                avatar: current_user.avatar.url}
      render json: user
    else
      render json: []
    end
  end

  def show
    user = User.find(params[:id])
    main_user =  {name: user.name,
              id: user.id,
              surname: user.surname,
              email: user.email,
              avatar: user.avatar.url}
    render json: main_user
  end

  def ifLogged?
    if(defined?(current_user.name) == nil)
      render json: false
    else
      render json: true
    end
  end

  def create
      @user = User.create(name: params[:name],
                       surname: params[:surname],
                       email: params[:email],
                       password: params[:password],
                       password_confirmation: params[:password_confirmation],
                       avatar: params[:avatar])
    if @user.save
      sign_in(@user)
      render json: @users.to_json
    else
      p @user.errors.full_messages
      render json: []
    end
  end

  def update
    @user = User.find(params[:id])
    if @user.update_attributes(name: params[:name],
                     surname: params[:surname],
                     email: params[:email],
                     password: params[:password],
                     password_confirmation: params[:password_confirmation],
                     avatar: params[:avatar])
      render json: @user.to_json
    else
      render json: []
    end
  end
end
