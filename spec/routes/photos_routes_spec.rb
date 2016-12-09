require "rails_helper"

RSpec.describe PhotosController, :type => :controller do
  describe "PhotosRoutes" do
    it "get /users/1/get_short_photos should redirect to photos#get_short_photos-list" do
      expect(:get => "/users/1/get_short_photos").to route_to(:controller => "photos",
                          :user_id => "1",:action => "get_short_photos_list")
    end

    it "post /users/1/photos should redirect to photos#create" do
      expect(:post => "/users/1/photos").to route_to(:controller => "photos",
                          :user_id => "1",:action => "create")
    end

    it "get /users/1/get_full_photos should redirect to photos#get_full_photos-list" do
      expect(:get => "/users/1/get_full_photos").to route_to(:controller => "photos",
                          :user_id => "1",:action => "get_full_photos_list")
    end
  end
end
