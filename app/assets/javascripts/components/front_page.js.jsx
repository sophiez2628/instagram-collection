var FrontPage = React.createClass({
  handleClick: function(e) {
    e.preventDefault();
    this.props.history.pushState(null, "collections");
  },

  render: function() {
    return (
      <div>
        <input className="view-collections"
               type="submit"
               value="View Collections"
               onClick={this.handleClick}>
        </input>

        <SearchBar />
        <Photos />
      </div>
    );
  }
});
