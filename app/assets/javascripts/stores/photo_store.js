(function(root){

  var CHANGE_EVENT = "change";
  var _photos = [];

  var filter = function(photos) {
    var filteredPhotos = [];
    for(var i = 0; i < photos.photos.data.length; i++) {
      var aPhoto = photos.photos.data[i];
      var time = parseInt(aPhoto.created_time);
      if (time >= photos.start && time <= photos.end) {
        filteredPhotos.push(aPhoto);
      }
    }
    return filteredPhotos;
  }
  var resetPhotos = function(photos){
    if (photos.start) {
      //instagram api objects
      _photos = filter(photos);
    } else {
      //json format
      _photos = photos.photos;
    }
    PhotosStore.onChange();
  };

  root.PhotosStore = $.extend({}, EventEmitter.prototype, {
    all: function(){
      return _photos.slice(0);
    },

    addChangeListener: function(callback){
      this.on(CHANGE_EVENT, callback);
    },

    removeChangeListener: function(callback){
      this.removeListener(CHANGE_EVENT, callback);
    },

    onChange: function() {
      this.emit(CHANGE_EVENT);
    },

    dispatcherID: AppDispatcher.register(function(action){
      if(action.actionType === PhotosConstants.PHOTOS_RECEIVED){
        resetPhotos(action.photos);
      }
    })
  });

})(this);
