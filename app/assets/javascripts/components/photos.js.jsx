var Photos = React.createClass({

  getInitialState: function() {
    return { photos: [], collections: [] };
  },

  componentDidMount: function() {
    PhotosStore.addChangeListener(this.onPhotosChange);
    CollectionsStore.addChangeListener(this.onCollectionsChange);
    ApiUtil.fetchCollections();
  },

  onCollectionsChange: function() {
    this.setState({ collections: CollectionsStore.all() });
  },

  onPhotosChange: function() {
    this.setState({ photos: PhotosStore.all() });
  },

  handleSubmit: function(e) {
    e.preventDefault();
    var selectedIdx = e.currentTarget.selections.options.selectedIndex;
    var selectedCollectionId = this.state.collections[selectedIdx].id;
    //add image/video to the chosen collection
    ApiUtil.savePhoto({
      url: e.currentTarget.dataset.url,
      link: e.currentTarget.dataset.link,
      tagTime: e.currentTarget.dataset.tagTime,
      collectionId: selectedCollectionId
    });
  },

  render: function() {
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
                        <source key={index} src={url}></source>
                      </video>
                    </a>
                  );
                } else {
                  url = photo.url || photo.images.standard_resolution.url;
                  media.push(
                    <a href={photo.link}>
                      <img key={index} src={url}></img>
                    </a>
                  );
                }
                if (this.props.route.name) {
                  return media;
                } else {
                  return (
                    <li>
                      {media}
                      <div className="photo-details">
                        <span className="username">{photo.user.username}</span>
                        <form className="group"
                          onSubmit={this.handleSubmit}
                          data-url={url}
                          data-link={photo.link}
                          data-tag-time={photo.created_time}>
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
