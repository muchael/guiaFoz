Rails.application.routes.draw do
  namespace :api do
    post 'attractions/query'
  end

  resources :itineraries
  resources :tags
  resources :attractions
  resources :places
  root to: 'home#show'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
