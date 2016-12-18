class WelcomeController < ApplicationController

	def index
		@chats = Chat.all.reverse
	end

end