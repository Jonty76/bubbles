import React from 'react';
import { FoodType } from './food-type.jsx';

let Menu = React.createClass({
  render: function() {
    return (
      this.props.types.forEach(function(foodType) {
        return (
          <div>
            <li><FoodType {...foodType} /></li>
          </div>
        );
      })
    );
  }
});

module.exports = {
    Menu
}
