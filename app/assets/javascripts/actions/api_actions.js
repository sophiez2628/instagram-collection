ApiActions = {
  receivePhotos: function(photos, start, end) {
    AppDispatcher.dispatch({
      actionType: PhotosConstants.PHOTOS_RECEIVED,
      photos: {photos: photos, start: start, end: end}
    })
  },

  receiveCollections: function(collections) {
    AppDispatcher.dispatch({
      actionType: CollectionsConstants.COLLECTIONS_RECEIVED,
      collections: {collections: collections}
    })
  }
}
