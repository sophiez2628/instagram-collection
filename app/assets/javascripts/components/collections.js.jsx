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

  render: function() {
    if (this.state.collections.length > 0) {
      return (
        <div>
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
    } else {
      return (
        <div>
          No Collections Yet!
        </div>
      )
    }
  }
});
