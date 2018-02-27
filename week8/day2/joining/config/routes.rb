Rails.application.routes.draw do

root "subjects#index"
resources :subjects

post "/assign", to: "rooms#assign"

end
