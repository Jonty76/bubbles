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

  componentDidMount: function (){
    if(this.props.tagName !== "restaurant") {
      document.getElementById('title').classList.add("margin-fix")
    }
  },

  render: function() {
    var menu = this.getStructuredMenu();
    var restaurant;
      if (this.props.tagName === "restaurant"){
        restaurant = this.props.tagValue + " Image"
      } else {
        restaurant = "noImage"
      }
    var burgerMenuOptions = ["About+/about", "Create Order+/", "Piccnicc Point+/map-view", "Order History+/order-history", "Logout+/login"]
    var basketContent = this.props.helpers.numberOfItemsInBasket(this.props.basket)

    return (
      <div className="custom-container desktop-container">
        <Header headerTheme={"whiteNav"} text={"Menu"} iconRight={"menu"} iconLeft={"arrow_back"} burgerMenuOptions={burgerMenuOptions}/>

          <div className="center-align outer-restaurant-container">
            <div className="valign-wrapper">
            <div className="valign center-this">
              <div className="restaurant-image-container">
                {restaurantImages[restaurant]}
                <div className="restaurant-info">
                  <h2 id="title" className="no-margin">{this.props.tagValue}</h2>
                  <h5 className="restaurant-description">{this.props.helpers.getDescription(this.props.tagValue)}</h5>
                </div>
              </div>
            </div>
            </div>
          </div>

          <div className="restaurant-logo">
            {restaurantImages[this.props.tagValue]}
          </div>

          <MenuComponent
            basketContent={basketContent}
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
