import React from "react";
import { Link } from 'react-router';

let MenuComponent = require('../menu.jsx');
let BasketBar = require('../basket-bar.jsx');

let restaurantData = require('../../data/restaurant-logos.jsx');

let selectRestaurant = React.createClass({

  getInitialState: function(){
    return {
      view: "selectRestaurant",
      searching: false,
      filteredMenu: this.props.basket,
      searchText: ""
    };
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
                <p className="restaurant-decription">Description</p>
              </div>
              <div className="col s4 right-align">
                {restaurantData[restaurantName]}
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
        <button className="food-type-list"
                onClick={event => this.replaceState(this.getInitialState())}><span className="glyphicon glyphicon-tag pull-left tag"></span>Order By Restaurant</button>
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
            <MenuComponent menu={basket} actions={this.props.actions} />
            {this.renderSelectFoodType()}
          </div>
        )
      }
    }

    return (
      <div className='pull-out'>
        <span className="input-group-addon">
      <i className="glyphicon glyphicon-search"></i>
      </span>
        <input id="food-search"
          onFocus={this.focusOnInputBox}
          onChange={this.searchInputChange}
          type="text"
          placeholder=" Search here by food type or name...">
        </input>

        {restaurantList}

        <BasketBar helpers={this.props.helpers} menu={this.props.basket}/>
      </div>
    )
  }

});

module.exports = selectRestaurant;