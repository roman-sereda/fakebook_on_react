require "test_helper"

class UserTest < ActiveSupport::TestCase

  def setup
    @user = FactoryGirl.create(:user)
  end

  def test_users_atrributes_exists
    assert @user.respond_to?(:name), "User.name doesnt exists"
    assert @user.respond_to?(:surname), "User.surname doesnt exists"
    assert @user.respond_to?(:email), "User.email doesnt exists"
  end

  def test_user_email_validation
    assert_not @user.update_attributes(email: "test.test.test")
    assert_not @user.update_attributes(email: "test@test")
    assert_not @user.update_attributes(email: ""), "User.email  empty created"
  end

  def test_users_name_validation
    assert_not @user.update_attributes(name: ""), "User.name empty created"
    assert_not @user.update_attributes(name: "test"*20), "User.name more than 50 created"
    assert_not @user.update_attributes(name: "te"), "User.name less than 50 created"
    assert_not @user.update_attributes(surname: ""), "User.surname empty created"
    assert_not @user.update_attributes(surname: "test"*20), "User.surname more than 50 created"
    assert_not @user.update_attributes(surname: "te"), "User.surname less than 50 created"
  end

  def test_user_password_validation
    assert_not @user.update_attributes(password: "", password_confirmation: ""), "Password empty created"
    assert_not @user.update_attributes(password: "test", password_confirmation: "test"), "Password shorter than 8 created"
  end

  def test_users_confiramation_password
    assert     @user.update_attributes(password: "testtest", password_confirmation: "testtest"), "same passwords dont match"
    assert_not @user.update_attributes(password: "testtest", password_confirmation: "tsettset"), "different passwords math"
  end

  def test_users_email_sensitive
    emails.each do |email|
      @user.update_attributes(email: email)
      assert_equal @user.email, "test@test.com", "Email sensitive fail"
    end
  end

  def emails
    ["TeSt@TeSt.CoM", "TEST@test.com", "test@TEST.COM"]
  end

end
