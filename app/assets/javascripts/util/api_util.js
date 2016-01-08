ApiUtil = {
  fetchPhotos: function(tag, start, end) {
    var url = Instagram.BASE_URL + tag + Instagram.ACCESS_TOKEN;

    $.ajax({
      type: "GET",
      url: url,
      dataType: "jsonp",
      success: function(response) {
        ApiActions.receivePhotos(response, start, end);
      }
    })
  },

  fetchCollections: function() {
    $.ajax({
      type: "GET",
      url: "/api/collections",
      dataType: "json",
      success: function(response) {
        ApiActions.receiveCollections(response);
      }
    })
  },

  createCollection: function(params) {
    $.ajax({
      type: "POST",
      data: params,
      url: "/api/collections",
      success: function(response) {
        ApiUtil.fetchCollections();
      }
    })
  }
}
