import React from 'react';
import { Router, Route, Link } from 'react-router';
import Header from './header.jsx';

let getId = (function() {
  let id = 0;
  return function() {
    id += 1;
    return id - 1;
  }
}());

var resetMenu = function(menu) {
  menu.forEach(function(item) {
    item.quantityOrdered = 0;
  });
};

var getMenu = function() {
  var menu = [
    {
      id : getId(),
      name :"Salmon sandwich",
      foodType : "Sandwich",
      restaurant : "Pret",
      price: "350"
    },
    {
      id : getId(),
      name :"Cheese and pickle sandwich",
      foodType : "Sandwich",
      restaurant : "Pret",
      price: "250"
    },
    {
      id : getId(),
      name :"Nutella and banana sandwich",
      foodType : "Sandwich",
      restaurant : "Pret",
      price: "500"
    },
    {
      id : getId(),
      name :"Jam sandwich",
      foodType : "Sandwich",
      restaurant : "Pret",
      price: "200"
    }
  ];
  resetMenu(menu);
  return menu;
}

// TODO: create actions addItem and removeItem

// TODO: create function to choose props for children (numberOrdered, id, displayName and price)
// TODO: filter menu ie get correct pages

let Basket = React.createClass({

  addItem: function(itemID) {
      // faster solution. use this.state.menu[itemID]
      var menu = this.state.basket.map(function(item, i, array) {
        var itemCopy = {};
        Object.keys(item).forEach(function(key) {
          itemCopy[key] = item[key];
        });
        if (itemCopy.id === itemID) {
          itemCopy.quantityOrdered++;
          console.log('item with id ', itemID, "incremented, now has ", item.quantityOrdered + "ordered");
        }
      return itemCopy;
      });
      this.setState({
        basket: menu
      });
  },

  removeItem: function(itemID) {
    var menu = this.state.basket.map(function(item, i, array) {
      var itemCopy;
      Object.keys(item).forEach(function(key) {
        itemCopy[key] = item[key];
      });
      if (itemCopy.id === itemID) {
        itemCopy.quantityOrdered--;
        console.log('item with id ', itemID, "incremented, now has ", item.quantityOrdered + "ordered");
      }
    return itemCopy;
    });
    this.setState({
      basket: menu
    });
  },

  clearBasket : function() {
    var menu = this.state.basket.map(function(item, i, array) {
      var itemCopy;
      Object.keys(item).forEach(function(key) {
        itemCopy[key] = item[key];
      });
      itemCopy.quantityOrdered = 0;
      return itemCopy;
    });
    this.setState({
      basket: menu
    });
  },

  getInitialState: function() {
    return {
      basket: getMenu(),
      actions: {
        addItem: this.addItem,
        removeItem: this.removeItem,
        clearBasket: this.clearBasket
      }
    };
  },

  getChildrenWithActions: function() {
    // var childProps = {
    //   actions: this.props.actions,
    //   basket: this.state.basket
    // };
    var state = this.state;

    return React.Children.map(this.props.children, function(child) {
      return React.cloneElement(child, state);
    });
  },

  render: function() {
    console.log(this.props.children);
    return (
      <div>
        <p>WOAH</p>
        {this.getChildrenWithActions()}
      </div>
    );
  }
});

module.exports = Basket;
