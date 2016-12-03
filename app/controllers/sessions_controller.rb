class SessionsController < ApplicationController

  skip_before_action :verify_authenticity_token

  def create
    @user = User.find_by(email: user_params[:email].downcase)

    if @user && @user.authenticate(user_params[:password])

      sign_in(@user)
      render json: (true).to_json
    end
      render json: (true).to_json
    else
  end

  def destroy
    p "!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!"
    sign_out
    render json: (false).to_json
  end

  def user_params
    params.require(:user).permit(:email, :password)
  end

end
