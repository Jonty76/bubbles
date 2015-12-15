import React from "react";
//let MenuComponent = require('../menu.jsx');

let SelectMenu = React.createClass({

  getRestaurantList: function() {
    var getUniqueTags = this.props.helpers.getUniqueTags;
    var uniqueTags = getUniqueTags(this.props.basket, "restaurant");
    return uniqueTags.map(function(tag){
      return (
        <button>{tag}</button>
      )
    });
  },

  render: function(){
    var restaurantList = this.getRestaurantList();

    return(
      <div>
          <input type="text" placeholder="Search by food type or name"></input>
          {restaurantList}
      </div>
    )
  }

});

module.exports = SelectMenu;
