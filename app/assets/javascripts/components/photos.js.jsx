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
    return (
      <div>
        <ul>
          {
            for(var i = 0; i < this.state.photos.length; i++) {
              <li>
                <img src={this.state.photos[i].images.standard_resolution}></img>
              </li>
            };
          }
        </ul>
      </div>
    );
  }
});
