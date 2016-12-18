Rails.application.routes.draw do
  
	root "welcome#index"

	resources :chats
	resources :messages

	namespace :api, defaults: {format: :json} do
		resources :chats
		resources :messages
	end

end
