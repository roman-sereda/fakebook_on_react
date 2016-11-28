class UsersController < ActionController::Base

  def index
    @users = User.all
    render json: @users.to_json
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

  def user_params
    params.require(:user).permit(:name, :surname, :email, :password, :password_confirmation)
  end

end
