import React from 'react';
import {FoodItem} from './food-item.jsx';

var Title = React.createClass({
  render: function() {
    return(
      <div>
        <h2>{this.props.title}</h2>
      </div>
    )
  }
});

var FoodItems = React.createClass({
  render: function() {
    return (
      this.props.items.forEach(function(item){
        return (
        <div>
          <li><FoodItem {...item} /></li>
        </div>
      });
    )
  );
}
});



var FoodType = React.createClass({
  render: function(){
    return (
      <div>
        <Title title={this.props.title} />
        <FoodItems items={this.props.items} />
      </div>
    }
  );
});

module.exports = {
  FoodType,
  Components: {
    FoodItems,
    Title
  }
}
