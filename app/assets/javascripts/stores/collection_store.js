(function(root){

  var CHANGE_EVENT = "change";
  var _collections = [];

  var resetCollections = function(collections){
    _collections = collections.collections;
    CollectionsStore.onChange();
  };

  root.CollectionsStore = $.extend({}, EventEmitter.prototype, {
    all: function(){
      return _collections.slice(0);
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
      if(action.actionType === CollectionsConstants.COLLECTIONS_RECEIVED){
        resetCollections(action.collections);
      }
    })
  });

})(this);
