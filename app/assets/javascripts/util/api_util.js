ApiUtil = {

  fetchPhotos: function(tag, start, end, nextUrl, update) {
    var url = nextUrl || (Instagram.BASE_URL + tag + Instagram.ACCESS_TOKEN);

    var filter = function(photos) {
      //start and end available to filter due to closure
      var filteredPhotos = [];
      for(var i = 0; i < photos.data.length; i++) {
        var aPhoto = photos.data[i];
        var time = parseInt(aPhoto.created_time);
        console.log(time);
        if (time >= start && time <= end) {
          filteredPhotos.push(aPhoto);
        }
      }
      return {filteredPhotos: filteredPhotos, nextUrl: photos.pagination.next_url};
    }

    $.ajax({
      type: "GET",
      url: url,
      dataType: "jsonp",
      success: function(response) {
        var processed = filter(response);
        if (processed.filteredPhotos.length > 0) {
          ApiActions.receivePhotos(processed.filteredPhotos, start, end, processed.nextUrl, update);
        } else {
          ApiUtil.fetchPhotos(tag, start, end, processed.nextUrl)
        }
      }
    })
  },

  // fetchPhotosFromNextUrl: function(url) {
  //   $.ajax({
  //     type: "GET",
  //     url: url,
  //     dataType: "jsonp",
  //     success: function(response) {
  //       ApiActions.receivePhotos(response)
  //     }
  //   })
  // },

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
  },

  savePhoto: function(params) {
    $.ajax({
      type: "POST",
      data: params,
      url: "/api/photos",
      success: function(response) {
        alert("Saved to Collection Successfully!");
      }
    })
  },

  showPhotos: function(params) {
    $.ajax({
      type: "GET",
      data: params,
      url: "/api/photos",
      success: function(response) {
        ApiActions.receivePhotos(response);
      }
    })
  }
}
