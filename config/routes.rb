Rails.application.routes.draw do
  root to: "static_pages#root"

  namespace :api, defaults: {format: :json} do
    resources :collections, only: [:create, :index]
    resources :photos, only: [:create, :index]
  end
end
