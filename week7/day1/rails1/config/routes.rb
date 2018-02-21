Rails.application.routes.draw do
 

 root to: 'welcome#hello'
 get '/about' => 'welcome#about'

 resources :blogs
end
