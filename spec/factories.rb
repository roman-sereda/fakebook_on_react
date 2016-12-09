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

    trait :with_post do
      after :create do |user|
        FactoryGirl.create_list :post, 1, :user => user
      end
    end
  end
  factory :post do
    factory :valid_post do
      sequence(:title)  { "test"*2 }
      sequence(:body) { "test"*2 }
    end

    factory :invalid_post do
      title "t"
      body "t"
    end
  end
end
