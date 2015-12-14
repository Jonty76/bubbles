import React from 'react';
import {FoodItem} from './food-item.jsx';

var Title = React.createClass({
  render: function() {
    return(
      <div>
        {this.props.title}
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
      <Title title={this.props.title} />
      <h1>{this.props.title}</h1>
      <FoodItems items={this.props.items} />
    }
  );
});

module.exports = {
  FoodType,
  Components: {

  }
}
