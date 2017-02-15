Rails.application.routes.draw do
  root 'games#new'
  devise_for :users
  resources :players
  resources :games
end
