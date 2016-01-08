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

  render: function() {
    if (this.state.photos.length > 0) {
      return (
        <div className="photos">
          <ul className="group">
            {
              this.state.photos.map(function(photo, index) {
                var media = [];
                if (photo.videos) {
                  media.push(
                    <a href={photo.link}>
                      <video controls>
                        <source key={index} src={photo.videos.standard_resolution.url}></source>
                      </video>
                    </a>
                  );
                } else {
                  media.push(
                    <a href={photo.link}>
                      <img key={index} src={photo.images.standard_resolution.url}></img>
                    </a>
                  );
                }
                return (
                  <li>
                    {media}

                    <div className="photo-details">
                      <span className="username">{photo.user.username}</span>
                      <form className="group">
                        <select>
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
              }.bind(this))
            }
          </ul>
        </div>
      );
    } else {
      return (
        <div>Loading...</div>
      );
    }
  }
});
