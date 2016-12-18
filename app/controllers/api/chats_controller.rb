class API::ChatsController < API::APIController

	def index
		render json: Chat.all
	end

	def show
		@chat = Chat.find params[:id]
		render json: @chat, include: :messages
	end

end