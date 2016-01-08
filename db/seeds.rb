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
