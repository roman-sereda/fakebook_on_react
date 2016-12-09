require "rails_helper"

RSpec.describe UsersController, :type => :controller do
  describe "UsersRoutes" do
    it "get /users should redirect to users#index" do
      expect(:get => "/users").to route_to(:controller => "users",
                                                        :action => "index")
    end

    it "get /isLogged should redirect to users#ifLogged?" do
      expect(:get => "/iflogged").to route_to(:controller => "users",
                                                        :action => "ifLogged?")
    end

    it "post /users should redirect to users#create" do
      expect(:post => "/users").to route_to(:controller => "users",
                                                        :action => "create")
    end

    it "get /current_user should redirect to users#get_current_user" do
      expect(:get => "/current_user").to route_to(:controller => "users",
                                                        :action => "get_current_user")
    end

    it "get /users/1 should redirect to users#show" do
      expect(:get => "/users/1").to route_to(:controller => "users", :id => "1",
                                                        :action => "show")
    end

    it "patch /users/1 should redirect to users#update" do
      expect(:patch => "/users/1").to route_to(:controller => "users",
                                                :action => "update",  :id => "1")
    end
  end
end
