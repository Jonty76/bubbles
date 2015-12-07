var React = require('react');
import { Router, Route, Link } from 'react-router';

var Page1 = React.createClass({
  render: function() {
    return (
      <div>
        <h1>This is page 1</h1>
      </div>
    );
  }
});

var Page2 = React.createClass({
  render: function() {
    return (
      <div>
        <h1>This is page 2</h1>
      </div>
    );
  }
});

var Index = React.createClass({
  render: function() {
    return (
      <div>
        <Link to='/page1'>page 1</Link>
        <br/>
        <Link to='/page2'>page 2</Link>
      </div>
    );
  }
});

var App = React.createClass({
  render: function() {
    return (
      <div>
        <Router>
          <Route path="/" component={Index}>
            <Route path="/page1" component={Page1}/>
            <Route path="/page2" component={Page2}/>
          </Route>
        </Router>
      </div>
    );
  }
});




module.exports = App;
