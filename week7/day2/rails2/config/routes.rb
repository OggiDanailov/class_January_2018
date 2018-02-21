Rails.application.routes.draw do
 

# resources :sessions, only: [:create, :destroy]
  get '/signin', to: 'sessions#new'
  post '/signin', to: 'sessions#create'
  post '/logout', to: 'sessions#destroy'


 root to: 'welcome#hello'
 get '/about' => 'welcome#about'

 resources :blogs

 resources :users

end
