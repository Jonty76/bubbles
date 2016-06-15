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
    var image = 'http://www.hospitalityandcateringnews.com/wp-content/uploads/2014/06/Wondertree-opens-at-Heathrow-Terminal-22.jpg'

    // var = restaurantWrapper {
    //   height: '15em';
    // }
    //
    // var restaurantWrapper:after {
    //     content : "";
    //     position: absolute;
    //     top: 0;
    //     left: 0;
    //     background-image: url("http://www.hospitalityandcateringnews.com/wp-content/uploads/2014/06/Wondertree-opens-at-Heathrow-Terminal-22.jpg");
    //     width: 100%;
    //     height: 100%;
    //     opacity : 0.9;
    //     z-index: -1;
    //     background-repeat: no-repeat;
    // }

    return (
      <div className="custom-container">
        <Header text={"Menu"} />

          <div className="center-align">
            <div className="valign-wrapper restaurant-wrapper">
            <div className="valign center-this">
                <h2>{this.props.tagValue}</h2>
                <h5>{this.props.helpers.getDescription(this.props.tagValue)}</h5>
            </div>
            </div>
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

// {restaurantImages[restaurant]}


module.exports = Menu;
