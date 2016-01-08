class Api::CollectionsController < ApplicationController
  def index
    collections = Collection.all
    render json: collections
  end

  def create
    collection = Collection.new(collection_param)
    if collection.save
      render json: collection
    end
  end

  private
  def collection_param
    params.permit(:name)
  end
end
