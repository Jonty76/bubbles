import React from 'react';
import { Router, Route, Link } from 'react-router';
import Header from './header.jsx';
import {setPrice} from './../savePrice.js';



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
        name :"Waldorf salad thin tartlet, smoked salmon",
        foodType : "Pie",
        restaurant : "Grain Store",
        price: "850"
      },
      {
        id : getId(),
        name :"Dehydrated crisp vegetable, fruit & mushroom salad in prune vinegar dressing & wood pigeon",
        foodType : "Salad",
        restaurant : "Grain Store",
        price: "900"
      },
      {
        id : getId(),
        name :"Dried fava beans & kishk soup, pomegranate molasses",
        foodType : "Soup",
        restaurant : "Grain Store",
        price: "650"
      },
      {
        id : getId(),
        name :"Butternut squash ravioli, mustard apricots, rocket & pumpkin seeds",
        foodType : "Pasta",
        restaurant : "Grain Store",
        price: "750"
      },
      {
        id : getId(),
        name :"Hot seaweed sushi, glazed pak choi, black garlic purée, hake à la plancha, vanilla butter",
        foodType : "Sushi",
        restaurant: "Grain Store",
        price: "750"
      },
      {
        id : getId(),
        name :"Green tomato, miso, chilli & lime glazed grilled octopus",
        foodType : "Salad",
        restaurant : "Grain Store",
        price: "950"
      },
      {
        id : getId(),
        name :"Chilli con veggie, mixed rice, sour cream",
        foodType : "Main",
        restaurant : "Grain Store",
        price: "1200"
      },
      {
        id : getId(),
        name :"Farro wheat, risotto, jerusalem artichokes, leeks & chestnut mushrooms",
        foodType : "Main",
        restaurant : "Grain Store",
        price: "1500"
      },
      {
        id : getId(),
        name :"Avocado Maki",
        foodType : "Sushi",
        restaurant : "Yo! Sushi",
        price: "200"
      },
      {
        id : getId(),
        name :"California Roll",
        foodType : "Sushi",
        restaurant : "Yo! Sushi",
        price: "360"
      },
      {
        id : getId(),
        name : " Surumi, Wakame & Cucumber",
        foodType : "Salad",
        restaurant : "Yo! Sushi",
        price: "270"
      },
      {
        id : getId(),
        name :"Edamame",
        foodType : "Salad",
        restaurant : "Yo! Sushi",
        price: "200"
      },
      {
        id : getId(),
        name :"Spicy Chicken",
        foodType : "Salad",
        restaurant : "Yo! Sushi",
        price: "410"
      },
      {
        id : getId(),
        name :"Yuzu Cured Salmon",
        foodType : "Salad",
        restaurant : "Yo! Sushi",
        price: "500"
      },
      {
        id : getId(),
        name :"Spicy Tuna Mini Roll",
        foodType : "Sushi",
        restaurant : "Yo! Sushi",
        price: "450"
      },
      {
        id : getId(),
        name :"Egg & Tomato on Rye ",
        foodType : "Sandwich",
        restaurant : "Pret A Manger",
        price: "199"
      },
      {
        id : getId(),
        name :"Scottish Smoked Salmon Granary",
        foodType : "Sandwich",
        restaurant : "Pret A Manger",
        price: "335"
      },
      {
        id : getId(),
        name :"Chicken & Avocado Granary",
        foodType : "Sandwich",
        restaurant : "Pret A Manger",
        price: "335"
      },
      {
        id : getId(),
        name :"Teriyaki Salmon Sushi",
        foodType : "Sushi",
        restaurant : "Pret A Manger",
        price: "450"
      },
      {
        id : getId(),
        name :"Aromatic Asian Chicken Soup",
        foodType : "Soup",
        restaurant : "Pret A Manger",
        price: "350"
      },
      {
        id : getId(),
        name :"Lentil and Quinoa Soup",
        foodType : "Soup",
        restaurant : "Pret A Manger",
        price: "350"
      },
      {
        id : getId(),
        name :"Leek and Potato Soup",
        foodType : "Soup",
        restaurant : "Pret A Manger",
        price: "350"
      },
      {
        id : getId(),
        name :"Tuscan Minestrone Soup",
        foodType : "Soup",
        restaurant : "Pret A Manger",
        price: "350"
      }
    ];

  resetMenu(menu);
  return menu;
}

var getDescription = function(name) {
  console.log(name, "@@@@@@");
  if (name === "Pret A Manger") return "Pret A Manger creates handmade, natural food, avoiding the obscure chemicals, additives andpreservatives found in much of the ‘prepared’and ‘fast’ food on the market today.";
  if (name === "Yo! Sushi") return "Rock and Roll conveyor belt sushi ninjas. Serving up sashimi, maki, noodles, handrolls, katsu curry and more. Nom nom nom.";
  if (name === "Grain Store") return "Grain Store is an innovative and sustainable restaurant and bar by celebrated chef Bruno Loubet, drinks pioneer Tony Conigliaro and the Zetter Group. Grain Store was awarded Menu of the Year at the Cateys in 2014.";
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

  formatPrice: function (price){
    var pounds = price => Math.floor(price/100);
    var pad = (str, len) => str.length < len ? pad('0' + str, len) : str;
    var pence = price => pad((price - 100 * pounds(price)).toString(), 2);
    return '£' + pounds(price) + '.' + pence(price);
  },

  numberOfItemsInBasket: function(quantityFilteredMenu) {
    return quantityFilteredMenu.map(function(menuItem){
      return menuItem.quantityOrdered;
    }).reduce(function(sum, next) {
      return sum + next;
    }, 0);
  },

  totalPriceOfItemsInBasket: function(quantityFilteredMenu) {
    var price = quantityFilteredMenu.map(function(menuItem) {
      return menuItem.price * menuItem.quantityOrdered;
      }).reduce(function(sum, next) {
        return sum + next;
    }, 0);
    setPrice(price); // I LOVE GLOBAL VARIABLES
    return price;
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
        getUniqueTags: this.getUniqueTags,
        getDescription:getDescription,
        formatPrice: this.formatPrice
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
