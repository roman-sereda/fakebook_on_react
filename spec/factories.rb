FactoryGirl.define do
  factory :user do
    factory :valid_user do
      name "qweqweqwe"
      surname "#qweqweqwe"
      sequence(:email) { |n| "Person_#{n}@gmail.com"}
      password "qweqweqwe"
      password_confirmation "qweqweqwe"
    end

    factory :invalid_user do
      name "wqeq"
      email "sad"
    end
  end
end
