(function(root){

  var CHANGE_EVENT = "change";
  var UPDATE_EVENT = "update";
  var _photos = [];
  var _nextUrl = "";
  var _start;
  var _end;

  var resetPhotos = function(photos){
    _photos = photos.photos;
    _nextUrl = photos.nextUrl;
    _start = photos.start;
    _end = photos.end;
    if (photos.update) {
      PhotosStore.onUpdateChange();
    } else {
      PhotosStore.onChange();
    }
  };

  root.PhotosStore = $.extend({}, EventEmitter.prototype, {
    all: function(){
      return _photos.slice(0, 20);
    },

    nextUrl: function() {
      return _nextUrl;
    },

    start: function() {
      return _start;
    },

    end: function() {
      return _end;
    },

    addChangeListener: function(callback){
      this.on(CHANGE_EVENT, callback);
    },

    addUpdateListener: function(callback) {
      this.on(UPDATE_EVENT, callback);
    },

    removeChangeListener: function(callback){
      this.removeListener(CHANGE_EVENT, callback);
    },

    onChange: function() {
      this.emit(CHANGE_EVENT);
    },

    onUpdateChange: function() {
      this.emit(UPDATE_EVENT);
    },

    dispatcherID: AppDispatcher.register(function(action){
      if(action.actionType === PhotosConstants.PHOTOS_RECEIVED){
        resetPhotos(action.photos);
      }
    })
  });

})(this);
