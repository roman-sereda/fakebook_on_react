require "rails_helper"

RSpec.describe FriendshipsController, :type => :controller do
  describe "FriendshipsRoutes" do
    it "get /users/1/friendships should redirect to friendships#show" do
      expect(:get => "friendships/1").to route_to(:controller => "friendships",
                                            :user_id => "1",:action => "show")
    end

    it "post /friendships should redirect to friendships#create" do
      expect(:post => "friendships").to route_to(:controller => "friendships",
                                                      :action => "create")
    end

    it "delete /friendships should redirect to friendships#destroy" do
      expect(:delete => "/friendships").to route_to(:controller => "friendships",
                                                      :action => "destroye")
    end
  end
end
