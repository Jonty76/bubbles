import React from "react";
import { Link } from 'react-router';
import Header from '../header.jsx';

let MenuComponent = require('../menu.jsx');
let BasketBar = require('../basket-bar.jsx');

let restaurantImages = require('../../data/restaurant-images.jsx');

let selectRestaurant = React.createClass({

  getInitialState: function(){
    return {
      view: "selectRestaurant",
      searching: false,
      filteredMenu: this.props.basket,
      searchText: ""
    };
  },

  componentWillMount: function(){
    var isExpo = typeof this.props.app
    if(isExpo === "undefined") {
      var location = window.location.origin + window.location.pathname + "#/"
      window.location.href = location
    }
  },

  getRestaurantList: function() {
    var getUniqueTags = this.props.helpers.getUniqueTags;
    var uniqueTags = getUniqueTags(this.props.basket, "restaurant");
    return uniqueTags.map(function(restaurantName){
      return (
        <Link to="/basket/menu">
          <div className="section restaurant-option" onClick={event => this.goToRestaurant(event, restaurantName)}>
            <div className="row no-margin">
              <div className="col s8">
                <p className="restaurant-name">{restaurantName}</p>
              </div>
              <div className="col s4 right-align">
                {restaurantImages[restaurantName]}
              </div>
            </div>
          </div>
          <div className="divider"></div>
        </Link>
      )
    }.bind(this));
  },

  goToRestaurant: function(e, restaurantName) {
    this.props.actions.setMenuType("restaurant", restaurantName);
  },

  goToFoodType: function(e, foodTypeName) {
    this.props.actions.setMenuType("foodType", foodTypeName);
  },

  focusOnInputBox: function(event) {
    this.setState({
      view: "inputBoxFocused"
    });
  },

  getFoodTypeList: function() {
    var getUniqueTags = this.props.helpers.getUniqueTags;
    var filteredMenu = this.getFilteredMenu()
    var uniqueTags = getUniqueTags(filteredMenu, "foodType");
    return uniqueTags.map(function(foodTypeName){
      return (
        <Link to="/basket/menu">
          <div className="section restaurant-option" onClick={event => this.goToFoodType(event, foodTypeName)}>
            <p className="restaurant-name">{foodTypeName}</p>
          </div>
          <div className="divider"></div>
        </Link>
      )
    }.bind(this));
  },

  renderSelectFoodType: function() {
    var foodTypeList = this.getFoodTypeList();

    return (
      <div>
        {foodTypeList}
        <div onClick={event => this.replaceState(this.getInitialState())} className="btn-large base-button"> FILTER BY RESTAURANT </div>
      </div>
    );
  },


  searchInputChange: function(event){

    // let searchMenu = function (menu, searchTerm){
    //   return menu.filter(function(item){
    //     return item.name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
    //   });
    // };

    this.setState({
      searching: true,
      searchText: event.target.value.substr(0)
    });
  },

  getFilteredMenu: function() {
    let searchMenu = function (menu, searchTerm){
      return menu.filter(function(item){
        return (
          item.name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1 ||
          item.foodType.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1
        )
      });
    };
    //validation with second substring argument
    return searchMenu(this.props.basket, this.state.searchText);

  },


  render: function(){

    var restaurantList;
    var orderer = this.props.helpers.orderMenu;
    if (this.state.view === "selectRestaurant") {
      restaurantList = this.getRestaurantList()
    } else if (this.state.view === "inputBoxFocused") {
      if (this.state.searching === false){
        restaurantList = this.renderSelectFoodType()
      } else {
        var basket = orderer(this.getFilteredMenu(), "restaurant")
        restaurantList = (
          <div>
            <MenuComponent menu={basket} actions={this.props.actions} page={"select-restaurant"}/>
            {this.renderSelectFoodType()}
          </div>
        )
      }
    }

    if (this.props.app === "airport"){
      var burgerMenuOptions = ["About+/about", "Start Again+/airport", "Piccnicc Point+/map-view", "Order History+/order-history", "Logout+/login"]
    } else {
      var burgerMenuOptions = ["About+/expo-about", "Start Again+/events", "Order Details+/expo-order-details", "FAQ+/expo-faq"]
    }

    return (
      <div className="custom-container desktop-container">
        <Header text={"Select Food"} headerTheme={"whiteNav"} iconRight={"menu"} iconLeft={"arrow_back"} burgerMenuOptions={burgerMenuOptions}/>
        <input id="food-search"
          onFocus={this.focusOnInputBox}
          onChange={this.searchInputChange}
          type="text"
          placeholder=" Search here by ingredient...">
        </input>

        {restaurantList}

        <BasketBar helpers={this.props.helpers} menu={this.props.basket}/>
      </div>
    )
  }

});

module.exports = selectRestaurant;
