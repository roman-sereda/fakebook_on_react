10.times do |count|
  @user = User.create(name: "user#{count}", surname: "surname#{count}", email: "u#{count}@u.u", password: "qweqweqwe", password_confirmation: "qweqweqwe", avatar: File.open("app/assets/images/default-avatar.png"))
end
