class PostsController < ApplicationController

  def index
    @user = User.find(params[:user_id])
    @posts = @user.posts
    render json: @posts.to_json
  end

  def new
    Post.create.params[post_params]
  end

  def create
    @post = current_user.posts.create(post_params)
    if @post.save

    else
      render 'new'
    end
  end

  def post_params
    params.require(:post).permit(:title, :body, :user_id)
  end

end
