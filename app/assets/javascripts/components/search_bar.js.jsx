var SearchBar = React.createClass({
  componentDidMount: function() {
    ApiUtil.fetchPhotos("dalmatian", Date.now()/1000 - 86400, Date.now());
  },

  handleSubmit: function(e) {
    e.preventDefault();
    var tag = e.currentTarget.tag.value;
    var start = Date.parse(e.currentTarget.start.value)/1000 - 86400;
    var end = Date.parse(e.currentTarget.end.value)/1000 + 86400;

    //make API call to Instagram
    ApiUtil.fetchPhotos(tag, start, end);
  },

  render: function() {
    return (
      <div>
        <form onSubmit={this.handleSubmit} className="group">
          <input type="text" placeholder="#hashtag" name="tag"></input>
          <input type="date" placeholder="start date" name="start"></input>
          <input type="date" placeholder="end date" name="end"></input>
          <input className="submit-button" type="submit" value="submit"></input>
        </form>
      </div>
    );
  }
});
