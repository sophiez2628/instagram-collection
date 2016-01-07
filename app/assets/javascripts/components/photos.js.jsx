var Photos = React.createClass({
  getInitialState: function() {
    return { photos: [] };
  },

  componentDidMount: function() {
    PhotosStore.addChangeListener(this.onPhotosChange);
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
                return (
                  <li>
                    <img key={index} src={photo.images.standard_resolution.url}></img>
                  </li>
                )
              })
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
