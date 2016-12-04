class PostsController < ApplicationController

  skip_before_action :verify_authenticity_token

  def index
    @user = User.find(params[:user_id])
    @posts = @user.posts
    @posts.each do |post|
      post.user = User.find(params[:user_id])
    end

    render json: @posts.to_json
  end

  def new
    Post.create.params[post_params]
  end

  def create
    @post = User.find(params[:user_id]).posts.create(post_params)
    if @post.save
      p "qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq"
      render json: @post.to_json
    else
      render 'new'
    end
  end

  def post_params
    params.require(:post).permit(:title, :body, :user_id)
  end

end
