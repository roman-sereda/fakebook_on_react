class SessionsController < ApplicationController

  skip_before_action :verify_authenticity_token

  def create
    @user = User.find_by(email: user_params[:email].downcase)

    if @user && @user.authenticate(user_params[:password])
      p "!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!"
      sign_in(@user)
      render json: @user.to_json
    end
      render json: @user.to_json
    else
  end

  def destroy
    sign_out
    render json: (false).to_json
  end

  def user_params
    params.require(:user).permit(:email, :password)
  end

end
