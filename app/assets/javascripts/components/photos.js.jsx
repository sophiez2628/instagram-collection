var Photos = React.createClass({

  getInitialState: function() {
    return { photos: [], collections: [], nextUrl: "", start: 0, end: 0 };
  },

  componentDidMount: function() {
    PhotosStore.addChangeListener(this.onPhotosChange);
    PhotosStore.addUpdateListener(this.onUpdateChange);
    CollectionsStore.addChangeListener(this.onCollectionsChange);
    ApiUtil.fetchCollections();
  },

  onCollectionsChange: function() {
    this.setState({ collections: CollectionsStore.all() });
  },

  onPhotosChange: function() {
    this.setState({ photos: PhotosStore.all(),
                    nextUrl: PhotosStore.nextUrl(),
                    start: PhotosStore.start(),
                    end: PhotosStore.end()
                  });
  },

  onUpdateChange: function() {
    this.setState({ photos: this.state.photos.concat(PhotosStore.all()), nextUrl: PhotosStore.nextUrl() });
  },

  loadMorePhotos: function() {
    ApiUtil.fetchPhotos(undefined, this.state.start, this.state.end, this.state.nextUrl, true);
  },

  handleSubmit: function(e) {
    e.preventDefault();
    var selectedIdx = e.currentTarget.selections.options.selectedIndex;
    var selectedCollectionId = this.state.collections[selectedIdx].id;
    //add image/video to the chosen collection
    //url for video or photo?
    ApiUtil.savePhoto({
      url: e.currentTarget.dataset.url,
      link: e.currentTarget.dataset.link,
      tagTime: e.currentTarget.dataset.tagTime,
      collectionId: selectedCollectionId,
      videos: e.currentTarget.dataset.videos
    });
  },

  render: function() {
    var loadMoreButton;
    if (this.props.route.name === undefined) {
      loadMoreButton = [<input type="submit"
             value="Load More!"
             className="load-more-button"
             onClick={this.loadMorePhotos}></input>]
    }

    if (this.state.photos.length > 0) {
      return (
        <div className="photos">
          <ul className="group">
            {
              this.state.photos.map(function(photo, index) {
                var media = [];
                var url = "";
                if (photo.videos) {
                  url = photo.url || photo.videos.standard_resolution.url;
                  media.push(
                    <a href={photo.link}>
                      <video controls>
                        <source src={url}></source>
                      </video>
                    </a>
                  );
                } else {
                  url = photo.url || photo.images.standard_resolution.url;
                  media.push(
                    <a href={photo.link}>
                      <img src={url}></img>
                    </a>
                  );
                }
                if (this.props.route.name) {
                  return <li key={photo.id}>{media}</li>;
                } else {
                  return (
                    <li key={photo.id}>
                      {media}
                      <div className="photo-details">
                        <span className="username">{photo.user.username}</span>
                        <form className="group"
                          onSubmit={this.handleSubmit}
                          data-url={url}
                          data-link={photo.link}
                          data-tag-time={photo.created_time}
                          data-videos={photo.videos}>
                          <select name="selections">
                            {
                              this.state.collections.map(function(collection, idx) {
                                return <option>{collection.name}</option>
                              })
                            }
                          </select>

                          <input type="submit"></input>
                        </form>
                      </div>
                    </li>
                  )
                }
              }.bind(this))
            }
          </ul>

          {loadMoreButton}
        </div>
      );
    } else {
      if (this.props.route.name) {
        return (
          <div>Choose a Collection to View its Photos!</div>
        );
      } else {
        return (
          <div>Loading...</div>
        );
      }
    }
  }
});
