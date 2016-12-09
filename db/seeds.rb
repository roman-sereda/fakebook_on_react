names = ["James",  "Mikel", "Andrew", "Gordon", "Omarin", "Amira", "Kateline", "Madison",
 "Quincy", "Kaiaaa"]

 surnames = ["SMITH", "JOHNSON", "WILLIAMS", "JONES", "BROWN", "DAVIS", "MILLER",
 "WILSON", "MOORE","TAYLOR"]


10.times do |count|
  @user = User.create(name: "#{names[count]}", surname: "#{surnames[count]}",
  email: "u#{count}@u.u", password: "qweqweqwe", password_confirmation: "qweqweqwe",
  avatar: File.open("app/assets/images/default-image.jpg"))
  50.times do |count2|
    @post = @user.posts.create(title: "Hey all #{count2}", body: "It was a very horrible day", user_id: @user.id)
  end
  @photo = Photo.create(user_id: @user.id,
              image: File.open("app/assets/images/post.jpg"))
  @photo2 = Photo.create(user_id: @user.id,
              image: File.open("app/assets/images/post2.jpg"))
  @user.posts.create(title: "Hey all", body: "It was a very horrible day", photo_id: @photo.id, user_id: @user.id)
  @user.posts.create(title: "Hey all", body: "It was a very horrible day", photo_id: @photo2.id, user_id: @user.id)
  @user.posts.create(title: "Hey all", body: "It was a very horrible day ", user_id: @user.id, video_url: "http://www.youtube.com/embed/2KDZg1-7KsE")
end
