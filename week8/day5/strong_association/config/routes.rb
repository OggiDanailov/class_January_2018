Rails.application.routes.draw do
  
  resources :doctors
  resources :patients
  root "doctors#index"
  post 'assign' => "appointments#assign"
  get "/appointments" => "appointments#index"

end
