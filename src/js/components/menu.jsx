import React from 'react';
import { FoodType } from './food-type.jsx';

let Menu = React.createClass({
  render: function() {
    return (
      <div>
        this.props.types.map(function(foodType) {
          return (
              <li><FoodType {...foodType} /></li>
          );
        })
      </div>
    );
  }
});

module.exports = {
    Menu
}
