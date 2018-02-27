Rails.application.routes.draw do

root "subjects#index"
resources :subjects

post "/subjects/:id/rooms/", to: "rooms#assign"

end
