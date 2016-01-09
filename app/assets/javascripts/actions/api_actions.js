ApiActions = {
  receivePhotos: function(photos, start, end, nextUrl, update) {
    AppDispatcher.dispatch({
      actionType: PhotosConstants.PHOTOS_RECEIVED,
      photos: {photos: photos, start: start, end: end, nextUrl: nextUrl, update: update}
    })
  },

  receiveCollections: function(collections) {
    AppDispatcher.dispatch({
      actionType: CollectionsConstants.COLLECTIONS_RECEIVED,
      collections: {collections: collections}
    })
  }
}
