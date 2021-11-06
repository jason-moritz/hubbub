# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Comment.destroy_all
Post.destroy_all
User.destroy_all

@admin = User.create!(username: 'admin', email: 'test@test.com', password: '123456',
                      image_url: 'https://res.cloudinary.com/dwhdm5z4a/image/upload/v1636123204/hubbub_images/wqfo905juwsykmwbfdi2.jpg', public_img: 'hubbub_images/wqfo905juwsykmwbfdi2')
@admin2 = User.create!(username: 'hummingbirds', email: 'test2@test.com', password: '123456',
                       image_url: 'https://res.cloudinary.com/dwhdm5z4a/image/upload/v1636070712/hubbub_images/xesamqfajtcsvpvn24av.jpg', public_img: 'hubbub_images/xesamqfajtcsvpvn24av')
puts "#{User.count} users created!"

10.times do
  Post.create!(title: Faker::Lorem.words(number: 2), content: Faker::Lorem.paragraph(sentence_count: 4),
               image_url: Faker::Internet.url, public_img: Faker::Internet.url, user_id: @admin.id)
end

puts "#{Post.count} posts created!"

Post.all.each do |post|
  3.times do
    Comment.create!(content: Faker::Lorem.paragraph(sentence_count: 2), post_id: post.id, user_id: @admin.id)
  end
end

puts "#{Comment.count} comments created!"
