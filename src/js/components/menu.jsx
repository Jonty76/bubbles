import React from 'react';
import { FoodType } from './food-type.jsx';
import { Link } from 'react-router';

let Menu = React.createClass({
  render: function() {
    return (
      <div className="menu-background">
        {this.props.menu.map(function(foodType) {
          return (
            <div className="menu-section">
              <FoodType {...foodType} actions={this.props.actions} inCheckout={this.props.inCheckout} page={this.props.page}/>
            </div>
          );
        }.bind(this))}
      </div>
    );
  }
});

module.exports = Menu;
