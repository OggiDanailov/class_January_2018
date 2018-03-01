Rails.application.routes.draw do
 
 resources :authors do
 	resources :books
 end

 resources :genres

 root "authors#index"	

end
