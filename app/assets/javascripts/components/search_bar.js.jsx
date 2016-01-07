var SearchBar = React.createClass({
  handleSubmit: function(e) {
    e.preventDefault();
    var tag = e.currentTarget.tag.value;
    var start = Date.parse(e.currentTarget.start.value)/1000;
    var end = Date.parse(e.currentTarget.end.value)/1000;
    var query = {tag: tag, start: start, end: end };

    //make API call to Instagram
    ApiUtil.fetchPhotos(tag, start, end);
  },

  render: function() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" placeholder="a hash tag" name="tag"></input>
          <input type="date" placeholder="start date" name="start"></input>
          <input type="date" placeholder="end date" name="end"></input>
          <input type="submit" value="submit"></input>
        </form>
      </div>
    );
  }
});
