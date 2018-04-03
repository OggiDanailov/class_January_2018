Rails.application.routes.draw do
  
root "articles#index"
  resources :articles


get '/redirect', to: 'example#redirect', as: 'redirect'
get '/callback', to: 'example#callback', as: 'callback'
get '/calendars', to: 'example#calendars', as: 'calendars'
get '/events/:calendar_id', to: 'example#events', as: 'events', calendar_id: /[^\/]+/
post '/events/:calendar_id', to: 'example#new_event', as: 'new_event', calendar_id: /[^\/]+/
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
