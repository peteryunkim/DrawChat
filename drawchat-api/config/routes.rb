Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api do
  	namespace :v1 do
  		post '/auth', to: 'auth#create'
  		resources :users
  		resources :chatrooms
  		resources :messages
  	end
  end
end
