import React from 'react';
import { Link } from 'react-router';
import Header from '../header.jsx';

let MenuComponent = require('../menu.jsx');
let BasketBar = require('../basket-bar.jsx');

let restaurantImages = require('../../data/restaurant-images.jsx');

var Menu = React.createClass({

  getStructuredMenu: function() {

    var filterer = this.props.helpers.filterMenu;
    var structurer = this.props.helpers.orderMenu;
    var filteredMenu =
      filterer(this.props.basket, this.props.tagName, this.props.tagValue);
    if (this.props.tagName === "restaurant"){
      return structurer(filteredMenu, "foodType");
    } else {
      return structurer(filteredMenu, "restaurant");
    }
  },

  render: function() {
    var menu = this.getStructuredMenu();
    var restaurant = this.props.tagValue + " Image"

    return (
      <div className="custom-container">
        <Header text={"Menu"} />
          <div>
            {restaurantImages[restaurant]}
              <h2 className = "restaurant-name-on-menu">{this.props.tagValue}</h2>
              <h5 className = "restaurant-description-on-menu">{this.props.helpers.getDescription(this.props.tagValue)}</h5>
          </div>
          <MenuComponent
            menu={menu}
            actions={this.props.actions}
            showBackLink={this.props.tagName === 'foodType'}
          />
        <BasketBar helpers={this.props.helpers} menu={this.props.basket}/>
      </div>
    );
  }
});

module.exports = Menu;
