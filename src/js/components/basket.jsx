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

Basket = React.createClass({

  getDefaultProps: function() {
    return {
      actions: {
        addItem: function(itemID) {
          // faster solution. use this.state.menu[itemID]
          this.state.menu.forEach(function(item) {
            if (item.id === itemID) {
              item.quantityOrdered++;
              console.log('item with id ', itemID, "incremented, now has ", item.quantityOrdered + "ordered");
            }
          });
        },

        removeItem: function(itemID) {
          this.state.menu.forEach(function(item) {
            if (item.id === itemID) {
              item.quantityOrdered--;
              console.log('item with id ', itemID, "decremented, now has ", item.quantityOrdered + "ordered");
            }
          });
        }

        clearBasket : function() {
          resetMenu(this.state.basket);
          // this.this.state.menu.forEach(function(item) {
          //   item.quantityOrdered = 0;
          // })
        }
      }
    };
  },

  getInitialState: function() {
    return {
      basket: getMenu()
    };
  },

  getChildrenWithActions: function () {
    var childProps = {
      actions: this.props.actions
    };

    return React.Children.map(this.props.children, function(child) {
      return React.cloneElement(child, childProps);
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
