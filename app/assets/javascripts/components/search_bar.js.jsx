var SearchBar = React.createClass({
  render: function() {
    return (
      <div>
        <input type="text" placeholder="a hash tag"></input>
        <input type="date" placeholder="start date"></input>
        <input type="date" placeholder="end date"></input>
      </div>
    );
  }
});
