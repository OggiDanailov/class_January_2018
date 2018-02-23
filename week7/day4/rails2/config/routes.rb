Rails.application.routes.draw do
 

# resources :sessions, only: [:create, :destroy]
  get '/signin', to: 'sessions#new'
  post '/signin', to: 'users#signin'
  post '/logout', to: 'sessions#destroy'
  


 root to: 'welcome#hello'
 get '/about' => 'welcome#about'

 resources :blogs do
 	resources :comments
 end

 resources :users

end
