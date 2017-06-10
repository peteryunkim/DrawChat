Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api do
  	namespace :v1 do
  		post '/auth', to: 'auth#create'

  		resources :users

  		post '/chatroom', to: 'chatrooms#show'
  		get '/chatrooms', to: 'chatrooms#index'

  		post '/message', to: 'messages#create'

  		get '/canvas', to: 'canvases#index'
  		post '/canvas', to: 'canvases#create'
  		patch '/canvas', to: 'canvases#update'
  		delete '/canvas', to: 'canvases#delete'
  		post '/one_canvas', to: 'canvases#show'

  	end
  end
end
