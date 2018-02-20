Rails.application.routes.draw do
 

resources :sessions, only: [:create]
  get '/signin', to: 'sessions#new'
  post '/logout', to: 'sessions#destroy'


 root to: 'welcome#hello'
 get '/about' => 'welcome#about'

 resources :blogs

 resources :users

end
