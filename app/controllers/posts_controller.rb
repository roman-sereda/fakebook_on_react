class PostsController < ApplicationController

  skip_before_action :verify_authenticity_token

  def index
    user = User.find(params[:user_id])
    posts = user.feed
    @posts = posts.map {|post|
      post_user = User.find(post.user_id)
      {
      title: post.title,
      body: post.body,
      id: post.id,
      user_login: "#{post_user.name} #{post_user.surname}",
      user_avatar: post_user.avatar,
      photo: (post.photo_id != nil ? Photo.find(post.photo_id).image.url : nil),
      video_url: post.video_url}
    }
    if(@posts.length > 0)
      render json: @posts
    else
      render json: []
    end
  end

  def create
    if(params[:image].class == ActionDispatch::Http::UploadedFile)
      @photo = User.find(params[:user_id]).photos.create(
                              user_id: params[:user_id], image: params[:image])

      @post = User.find(params[:user_id]).posts.create(title: params[:title],
          body: params[:body], photo_id: @photo.id, user_id: params[:user_id],
          video_url: if_has_video(params[:body]) ? get_url(params[:body]) : nil)
    else
      @post = User.find(params[:user_id]).posts.create(title: params[:title],
          body: params[:body], photo_id: nil, user_id: params[:user_id],
          video_url: if_has_video(params[:body]) ? get_url(params[:body]) : nil)

      if(if_has_video(params[:body]))
        @post.body = @post.body.sub(get_raw_url(params[:body]), "")
      end
    end

    if @post.save
      render json: @post
    else
      render json: []
    end
  end

end
