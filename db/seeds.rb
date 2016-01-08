# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

favorite_actresses = Collection.create({
  name: "Favorite Actresses"
  })

favorite_actors = Collection.create({
  name: "Favorite Actors"
  })

favorite_singers = Collection.create({
  name: "Favorite Singers"
  })

cute_dresses = Collection.create({
  name: "Cute Dresses"
  })

emmastone = Photo.create({
  url: "https://scontent.cdninstagram.com/hphotos-xpt1/t51.2885-15/s640x640/sh0.08/e35/12383589_905187976216208_1588505485_n.jpg",
  link: "https://www.instagram.com/p/BASdEzas5JZ/",
  tag_time: 1452278198,
  collection_id: favorite_actresses.id 
  })
