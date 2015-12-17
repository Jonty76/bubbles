import React from 'react';
import { Link } from 'react-router';

var Header = React.createClass({
  render: function() {
    return (
      <div className="header">
        <img className="logo" src="https://cloud.githubusercontent.com/assets/11833296/11848833/b9515a66-a41c-11e5-8ba2-69ae418f300b.png" />
        <Link to="/about"> About </Link>
        <br/>
      </div>
    );
  }
});

module.exports = Header;
