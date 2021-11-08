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

@admin = User.create!(username: 'TheDeveloper', email: 'test@test.com', password: '123456',
                      image_url: 'https://res.cloudinary.com/dwhdm5z4a/image/upload/v1636123204/hubbub_images/wqfo905juwsykmwbfdi2.jpg', public_img: 'hubbub_images/wqfo905juwsykmwbfdi2')
@admin2 = User.create!(username: 'Chewie', email: 'test2@test.com', password: '123456',
                       image_url: 'https://res.cloudinary.com/dwhdm5z4a/image/upload/v1636336422/hubbub_images/ewvfw2ofsjlcqdu3lanj.jpg')
@admin3 = User.create!(username: 'Grogu', email: 'test3@test.com', password: '123456', image_url: 'https://res.cloudinary.com/dwhdm5z4a/image/upload/v1636334211/hubbub_images/xru2tegzimkovh1nif9w.jpg')
@admin4 = User.create!(username: 'StevenTheCat', email: 'test4@test.com', password: '123456', image_url: 'https://res.cloudinary.com/dwhdm5z4a/image/upload/v1636222617/hubbub_images/nucogedywf6b0qleyv7q.jpg')
@admin5 = User.create!(username: 'TheLastAirBender', email: 'test5@test.com', password: '123456', image_url: 'https://res.cloudinary.com/dwhdm5z4a/image/upload/v1636334339/hubbub_images/pjzry2nkaqlwejn9g7ls.jpg')

puts "#{User.count} users created!"

User.all.map do |user|
  Post.create!(title: Faker::Quote.robin, content: Faker::TvShows::NewGirl.quote, user: user)
  Post.create!(title: Faker::Quote.robin, content: Faker::TvShows::Friends.quote, user: user)
  Post.create!(title: Faker::Quote.robin, content: Faker::TvShows::MichaelScott.quote, user: user)
end

puts "#{Post.count} posts created!"

Post.all.each do |post|
  Comment.create!(content: Faker::Movies::StarWars.quote(character: 'han_solo'), post_id: post.id, user: @admin)
  Comment.create!(content: Faker::Movies::StarWars.wookiee_sentence, post_id: post.id, user: @admin2)
  Comment.create!(content: Faker::Quote.yoda, post_id: post.id, user: @admin3)
  Comment.create!(content: Faker::Movies::StarWars.quote(character: 'leia_organa'), post_id: post.id, user: @admin4)
  Comment.create!(content: Faker::Movies::HarryPotter.quote, post_id: post.id, user: @admin5)
end

puts "#{Comment.count} comments created!"
