import React from 'react';
import { Router, Route, Link } from 'react-router';
import Header from './header.jsx';

module.exports = React.createClass({
  render: function() {

    return (
      <div>
        <Header />
        <div className='margin-main-content'>{this.props.children}</div>
      </div>
    );
  }
});
