require "rails_helper"

RSpec.describe PostsController, :type => :controller do
  describe "PostsRoutes" do
    it "get /index should redirect to posts#index" do
      expect(:get => "/users/1/posts").to route_to(:controller => "posts",
                                            :user_id => "1",:action => "index")
    end

    it "post /index should redirect to posts#create" do
      expect(:post => "/users/1/posts").to route_to(:controller => "posts",
                                            :user_id => "1",:action => "create")
    end
  end
end
