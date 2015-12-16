import React from 'react';
import { Link } from 'react-router';

var About = React.createClass({
  render: function() {
    return (

      <div>
          <Link to="/select-airport">Home</Link>
          <p> filler text here!! </p>
          <br/>
      </div>

    );
  }
});

module.exports = About;
