require "rails_helper"

RSpec.describe SessionsController, :type => :controller do
  describe "SessionsRoutes" do
    it "delete /signout should redirect to sessions#destroy" do
      expect(:delete => "/signout").to route_to(:controller => "sessions",
                                                        :action => "destroy")
    end

    it "post /sessions should redirect to sessions#create" do
      expect(:post => "/sessions").to route_to(:controller => "sessions",
                                                        :action => "create")
    end

  end
end
