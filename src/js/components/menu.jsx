import React from 'react';
import { FoodType } from './food-type.jsx';

let Menu = React.createClass({
  render: function() {
    return (
      <ul>
        {this.props.menu.map(function(foodType) {
          return (
            <li>
              <FoodType {...foodType} actions={this.props.actions}/>
            </li>
          );
        }.bind(this))}
      </ul>
    );
  }
});

module.exports = Menu;
