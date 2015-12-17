import React from 'react';
import { Link } from 'react-router';

var Header = React.createClass({
  render: function() {
    return (
      <div className="header">
        <Link className="home-link" to="/select-airport">Home</Link>
        <img className="logo" src="https://cloud.githubusercontent.com/assets/11833296/11873087/b39cf6fc-a4d0-11e5-8773-0a5076f9c5e5.png" />
        <Link className="about-link" to="/about"> About </Link>
        <br/>
      </div>
    );
  }
});

module.exports = Header;
