class PostsController < ApplicationController

  skip_before_action :verify_authenticity_token

  def index
    @user = User.find(params[:user_id])
    posts = @user.posts
    @posts = posts.map {|post| {
      title: post.title,
      body: post.body,
      id: post.id,
      user_login: "#{@user.name} #{@user.surname}",
      user_avatar: @user.avatar,
      photo: (post.photo_id != nil ? Photo.find(post.photo_id).image.url : nil)}
    }

    render json: @posts
  end

  def new
    Post.create.params[post_params]
  end

  def create
    if(params[:image].class == ActionDispatch::Http::UploadedFile)
      @photo = User.find(params[:user_id]).photos.create(
                              user_id: params[:user_id], image: params[:image])

      @post = User.find(params[:user_id]).posts.create(title: params[:title],
                                      body: params[:body], photo_id: @photo.id)
    else
      @post = User.find(params[:user_id]).posts.create(title: params[:title],
                                            body: params[:body], photo_id: nil)
    end

    if @post.save
      render json: @post
    else
      render json: []
    end
  end

end
