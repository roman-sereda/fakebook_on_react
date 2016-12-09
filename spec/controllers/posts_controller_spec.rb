require "rails_helper"

RSpec.describe PostsController do

  describe '#index' do
    context 'when correct user want to get posts' do
      let(:user) { FactoryGirl.create(:valid_user, :with_post) }
      before(:each) { get :index, user_id: user.id}

      it 'success' do
        expect(response).to be_success
      end
    end
  end

  describe '#create' do
    let(:user) { FactoryGirl.create(:valid_user) }
    before(:each) { post :create, ** post_attrs, user_id: user.id }

    context 'when valid data create new post' do
      let(:post_attrs) { attributes_for(:valid_post) }

      it 'success' do
        expect(response).to be_success
      end
    end

    context 'when invalid data create new post' do
      let(:post_attrs) { attributes_for(:invalid_post) }

      it 'failed' do
        expect(response).not_to be_success
      end
    end
  end
end
