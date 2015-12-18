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
      foodType : "Sandwiches",
      restaurant : "Pret A Manger",
      price: "350"
    },
    {
      id : getId(),
      name :"Cheese and pickle sandwich",
      foodType : "Sandwiches",
      restaurant : "Pret A Manger",
      price: "250"
    },
    {
      id : getId(),
      name :"Nutella and banana sandwich",
      foodType : "Sandwiches",
      restaurant : "Pret A Manger",
      price: "500"
    },
    {
      id : getId(),
      name :"Jam sandwich",
      foodType : "Sandwiches",
      restaurant : "Pret A Manger",
      price: "200"
    },
    {
      id : getId(),
      name :"Yellow Tail",
      foodType : "Sushi",
      restaurant : "Pret A Manger",
      price: "500"
    },
    {
      id : getId(),
      name :"Salmon",
      foodType : "Sushi",
      restaurant : "Pret A Manger",
      price: "200"
    },
    {
      id : getId(),
      name :"veg",
      foodType : "Sushi",
      restaurant : "Yo! Sushi",
      price: "100"
    }
  ];
  resetMenu(menu);
  return menu;
}

var getDescription = function(name) {
  if (name === "Pret A Manger") return "write about pret here";
  return ;
}

// TODO: create actions addItem and removeItem

// TODO: create function to choose props for children (numberOrdered, id, displayName and price)
// TODO: filter menu ie get correct pages

let Basket = React.createClass({

  setMenuType: function(tagName, tagValue) {
    this.setState({
      tagName: tagName,
      tagValue: tagValue
    });
  },

  filterMenu: function(menu, tagName, searchValue) {
    return menu.filter(function(menuItem) {
      return menuItem[tagName] === searchValue;
    });
  },

  filterMenuByQuantity: function(menu) {
    return menu.filter(function(menuItem) {
      return menuItem.quantityOrdered > 0;
    });
  },

  numberOfItemsInBasket: function(quantityFilteredMenu) {
    return quantityFilteredMenu.map(function(menuItem){
      return menuItem.quantityOrdered;
    }).reduce(function(sum, next) {
      return sum + next;
    }, 0);
  },

  totalPriceOfItemsInBasket: function(quantityFilteredMenu) {
    return quantityFilteredMenu.map(function(menuItem) {
      return menuItem.price * menuItem.quantityOrdered;
      }).reduce(function(sum, next) {
        return sum + next;
    }, 0);
  },

  getSubtotalForEachItem: function(quantityFilteredMenu) {
    return quantityFilteredMenu.map(function(menuItem) {
      return menuItem.price * menuItem.quantityOrdered;
    });
  },

  orderMenu: function(menu, tagName) {
    var structuredMenu = menu.reduce(function(structuredMenu, menuItem) {
      if (typeof structuredMenu[menuItem[tagName]] === 'undefined') {
        structuredMenu[menuItem[tagName]] = [];
      }
      structuredMenu[menuItem[tagName]].push(menuItem);
      return structuredMenu;
    }, {});
    return Object.keys(structuredMenu).map(function(sectionName) {
      return {
        name: sectionName,
        description: getDescription(sectionName),
        items: structuredMenu[sectionName]
      };
    })
  },

  getUniqueTags: function(menu, tagName){
    let arrIncludes = function(array, search){
      return array.reduce(function(includes, elem){
        return includes || elem === search;
      }, false)
    }
   return menu.reduce(function(uniqueTags, menuItem){
     if (!arrIncludes(uniqueTags, menuItem[tagName])) {
       uniqueTags.push(menuItem[tagName])
     }
      return uniqueTags;
   }, []);

  },

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
      var itemCopy = {};
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
      var itemCopy = {};
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

  clearQuantityOfItem: function(itemID) {
    var menu = this.state.basket.map(function(item, i, array) {
      var itemCopy = {};
      Object.keys(item).forEach(function(key) {
        itemCopy[key] = item[key];
      });
      if (itemCopy.id === itemID) {
        itemCopy.quantityOrdered = 0;
        console.log('Entire quantity of item with id ', itemID, "has now been removed", item.quantityOrdered + "ordered");
      }
      return itemCopy;
    });
    this.setState({
      basket: menu
    });
  },

  getInitialState: function() {
    return {
      basket: getMenu()
    };
  },

  getChildrenWithActions: function() {

    let props = {
      actions: {
        addItem: this.addItem,
        removeItem: this.removeItem,
        clearBasket: this.clearBasket,
        clearQuantityOfItem: this.clearQuantityOfItem,
        setMenuType: this.setMenuType
      },
      helpers: {
        filterMenu: this.filterMenu,
        orderMenu: this.orderMenu,
        filterMenuByQuantity: this.filterMenuByQuantity,
        totalPriceOfItemsInBasket: this.totalPriceOfItemsInBasket,
        numberOfItemsInBasket: this.numberOfItemsInBasket,
        getSubtotalForEachItem: this.getSubtotalForEachItem,
        getUniqueTags: this.getUniqueTags
      }

    };

    props = Object.assign(props, this.state);

    return React.Children.map(this.props.children, function(child) {
      return React.cloneElement(child, props);
    });
  },

  render: function() {

    return (
      <div>
        <p></p>
        {this.getChildrenWithActions()}
      </div>
    );
  }
});

module.exports = Basket;
