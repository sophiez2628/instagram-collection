(function(root){

  var CHANGE_EVENT = "change";
  var _photos = [];
  var resetPhotos = function(photos){
    _photos = photos;
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
