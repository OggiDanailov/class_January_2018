Rails.application.routes.draw do
 
  get '/signin', to: 'sessions#new'
  post '/signin', to: 'users#signin'
  post '/logout', to: 'sessions#destroy'

	root "blogs#index"
	
	resources :blogs
  resources :users
end
