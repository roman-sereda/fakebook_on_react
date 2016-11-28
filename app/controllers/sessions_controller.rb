class SessionsController < ApplicationController

  def create
    @user = User.find_by(email: user_params[:email].downcase)
    p "!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!"
    if @user && @user.authenticate(user_params[:password])
      render json: @users.to_json
    end
      render json: @users.to_json
    else
  end

  def user_params
    params.require(:user).permit(:email, :password)
  end

end
