require "test_helper"

class PostTest < ActiveSupport::TestCase

  def setup
    @post = FactoryGirl.create(:post)
  end

  def test_posts_atrributes_exists
    assert @post.respond_to?(:title), "Post.title doesnt exists"
    assert @post.respond_to?(:body), "Post.body doesnt exists"
  end

  def test_posts_title_validation
    assert_not @post.update_attributes(title: "t"), "Post.title less than 2 created"
    assert_not @post.update_attributes(title: "test"*30), "Post.title more than 25 created"
    assert_not @post.update_attributes(title: ""), "Post.title empty created"
  end

  def test_posts_body_validation
    assert_not @post.update_attributes(body: "test"*200), "Post.body more than 200 created"
    assert @post.update_attributes(body: ""), "Post.body empty was not created"
  end

end
