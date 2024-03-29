Rails.application.routes.draw do
  post '/auth/login', to: 'authentications#login'
  get '/auth/verify', to: 'authentications#verify'

  resources :posts do
    resources :comments, except: [:index]
  end

  resources :users, only: %i[show create update]

  put '/users/:id/security', to: 'users#update_password'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
