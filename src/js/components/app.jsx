import React from 'react';
import { Router, Route, Link } from 'react-router';
import Header from './header.jsx';
// import SelectAirport from './views/select-airport.jsx';

module.exports = React.createClass({

  // getDefaultProps: function() {
  //     return {
  //       children: [
  //           <SelectAirport.Page />
  //       ]
  //     };
  // },

  render: function() {
    console.log(this.props);
    return (
      <div>
        
        <Header />
        {this.props.children}

      </div>
    );
  }
});
