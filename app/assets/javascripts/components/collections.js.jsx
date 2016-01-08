var Collections = React.createClass({
  getInitialState: function() {
    return {collections: []};
  },

  componentDidMount: function() {
    CollectionsStore.addChangeListener(this.onCollectionsChange);
    ApiUtil.fetchCollections();
  },

  onCollectionsChange: function() {
    this.setState({ collections: CollectionsStore.all() });
  },

  handleSubmit: function(e) {
    e.preventDefault();
    var name = e.currentTarget.name.value;
    ApiUtil.createCollection(name);
  },

  render: function() {
    return (
      <div>
        <form onSubmit={this.handleSubmit} className="group create-collection">
          <input type="text" name="name" placeholder="name"></input>
          <input type="submit" value="create collection" className="submit-button"></input>
        </form>

        <ul className="group">
          {
            this.state.collections.map(function(collection, index) {
              return (
                <div className="collection" data-id={collection.id}>
                  {collection.name}
                </div>
              )
            })
          }
        </ul>
      </div>
    );
  }
});
