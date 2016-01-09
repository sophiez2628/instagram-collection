class Api::PhotosController < ApplicationController
  def create
    videos = photo_params[:videos] ? true : false

    photo = Photo.new({
      url: photo_params[:url],
      link: photo_params[:link],
      tag_time: Integer(photo_params[:tagTime]),
      collection_id: Integer(photo_params[:collectionId]),
      videos: videos
      })

    if photo.save
      render json: photo
    end
  end

  def index
    photos = Collection.find(Integer(collection_id[:collectionId])).photos
    if photos
      render json: photos
    end
  end

  private
  def photo_params
    params.permit(:url, :link, :tagTime, :collectionId, :videos)
  end

  def collection_id
    params.permit(:collectionId)
  end
end
