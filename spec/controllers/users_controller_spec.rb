require "rails_helper"

RSpec.describe UsersController do
  let(:users) { 4.times.map { |c| User.create(
                                      name: "#{c}qweqweqwe",
                                      surname: "#{c}qweqweqwe",
                                      email: "qwe#{c}@qwe.qwe",
                                      password: "qweqweqwe",
                                      password_confirmation: "qweqweqwe")}}

  describe '#index' do
    before(:each) { get :index }

    it 'assigns all users to @users' do
      expect(assigns(:users)).to match_array @users
    end

    it 'success' do
      expect(response).to be_success
    end
  end

  describe '#show' do
    context 'when requested user exists' do
      let(:user) { users[rand 4] }
      before(:each) { get :show, id: user.id }

      it 'success' do
        expect(response).to be_success
      end

      it 'assigns it to @user' do
        expect(assigns(:user)).to eq @user
      end
    end

    context 'when requested user does not exists' do
      it 'throws ActiveRecord::RecordNotFound' do
        expect { get :show, id: -1 }.to raise_exception ActiveRecord::RecordNotFound
      end
    end
  end

  describe '#create' do
    before(:each) { post :create, ** user_attrs }

    context 'when valid' do
      let(:user_attrs) { attributes_for(:valid_user) }

      it 'success' do
        expect(response).to be_success
      end

      it 'saves and assigns new user to @user' do
        user = assigns(:user)

        expect(user).to be_kind_of ActiveRecord::Base
        expect(user).to be_persisted
      end
    end

    context 'when invalid' do
      let(:user_attrs) { attributes_for(:invalid_user) }

      it 'assigns user to @user' do
        expect(assigns(:user)).to be_kind_of ActiveRecord::Base
      end
    end
  end

end
