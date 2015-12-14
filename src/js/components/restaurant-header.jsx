import React from 'react';

var RestaurantDetails = React.createClass({
  render: function(){
    return (
      <div>
        {this.props.restaurantTitle}
        {this.props.priceRange}
        {this.props.description}
      </div>
    );
  }
});

var RestaurantHeader = React.createClass({
  render: function(){
    return (
      <div>
        <div>{this.props.picture}</div>
        <RestaurantDetails {...props} />
      </div>
    )
  }
});

module.exports = {
  RestaurantHeader,
  Components: {
    RestaurantDetails
  }
}
