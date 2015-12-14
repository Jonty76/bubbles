import React from 'react';
import { Router, Route, Link } from 'react-router';
import Header from './header.jsx';

module.exports = React.createClass({
  render: function() {
    console.log(this.props.children.length);
    return (
      <div>
        <Header />
        {this.props.children}
      </div>
    );
  }
});
