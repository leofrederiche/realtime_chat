# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

c = Chat.new
c.title = 'D&D Classic'
c.save

c = Chat.new
c.title = 'Vampira a mascara'
c.save

m = Message.new
m.content = 'Olá!'
m.user = 'Leonardo'
m.chat_id = 1
m.save

m = Message.new
m.content = 'OII ^^'
m.user = 'Maria Eduarda'
m.chat_id = 1
m.save

m = Message.new
m.content = 'Dane-se!!!!'
m.user = 'Filipe'
m.chat_id = 2
m.save