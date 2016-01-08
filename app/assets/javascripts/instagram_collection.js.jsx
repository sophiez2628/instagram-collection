var startApp = function() {
  $(document).ready(function() {
    var root = document.getElementById("content");
    var Route = ReactRouter.Route;
    var Router = ReactRouter.Router;
    var IndexRoute = ReactRouter.IndexRoute;

    var App = React.createClass({
      render: function() {
        return (
          <div>
            {this.props.children}
          </div>
        );
      }
    });

    var routes = (
      <Route path="/" component={App}>
        <IndexRoute component={FrontPage} />
        <Route name = "collections" path="/collections" component={{collections: Collections, photos: Photos}} />
      </Route>
    );

    React.render(<Router>{routes}</Router>, root)
  });
}
