class PostsController < ApplicationController

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
