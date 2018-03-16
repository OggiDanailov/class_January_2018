Rails.application.routes.draw do
  
  resources :articles

  # root "welcome#index"
  
  devise_for :users, :controllers => { :registrations => 'users/registrations' }

  devise_scope :user do
	  authenticated :user do
	    root :to => 'welcome#index'
	  end
	  unauthenticated :user do
	    root :to => 'devise/registrations#new', as: :unauthenticated_root
	  end
	end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
