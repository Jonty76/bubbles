import React from 'react';
import { Router, Route, Link } from 'react-router';


module.exports = React.createClass({
  render: function() {
    return (
      <div>
        <Link to="/select-airport">page 1</Link>
        <br/>
        <Link to="/select-flight">page 2</Link>
        <br/>
      </div>
    );
  }
});
