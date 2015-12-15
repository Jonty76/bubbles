import React from 'react';
import { FoodType } from './food-type.jsx';

let Menu = React.createClass({
  render: function() {
    console.log("yo!!!", this.props.menu);
    return (
      <div>
        {this.props.menu.map(function(foodType) {
          return (
            <div className="menu-section">
              <FoodType {...foodType} actions={this.props.actions} inCheckout={this.props.inCheckout} />
            </div>
          );
        }.bind(this))}
      </div>
    );
  }
});

module.exports = Menu;
