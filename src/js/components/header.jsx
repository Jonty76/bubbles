import React from 'react';
import { Link } from 'react-router';

var Header = React.createClass({
  render: function() {
    return (
      <div>
        <Link to="/about">About</Link>
        <br/>
      </div>
    );
  }
});

module.exports = Header;
