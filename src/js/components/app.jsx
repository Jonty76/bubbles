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

var App = React.createClass({
  render: function() {
    return (
      <div>
        <Router>
          <Route path="page1" component={Page1}/>
          <Route path="page2" component={Page2}/>
        </Router>
      </div>
    );
  }
});




module.exports = App;
