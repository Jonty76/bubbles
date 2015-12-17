import React from 'react';
import { Router, Route, Link } from 'react-router';
import Header from './header.jsx';
import Slogan from './slogan.jsx';

module.exports = React.createClass({
  render: function() {

    return (
      <div>
        <Header />
        <Slogan />
        {this.props.children}
      </div>
    );
  }
});
