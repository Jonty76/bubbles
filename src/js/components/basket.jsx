import React from 'react';
import { Router, Route, Link } from 'react-router';
import Header from './header.jsx';
import {setPrice} from './../savePrice.js';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import StaticContainer from 'react-static-container'
import { createHistory, useBasename } from 'history'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import { red600 } from "material-ui/styles/colors"

var getMenu = require('../data/restaurant-data.js');

const muiTheme = getMuiTheme({
    palette: {
      accent1Color: '#E12534'
    }
})


var getDescription = function(name) {
  if (name === "Pret A Manger") return "Pret A Manger creates handmade, natural food, avoiding the obscure chemicals, additives andpreservatives found in much of the ‘prepared’and ‘fast’ food on the market today.";
  if (name === "Yo! Sushi") return "Rock and Roll conveyor belt sushi ninjas. Serving up sashimi, maki, noodles, handrolls, katsu curry and more. Nom nom nom.";
  if (name === "Grain Store") return "Grain Store is an innovative and sustainable restaurant and bar by celebrated chef Bruno Loubet, drinks pioneer Tony Conigliaro and the Zetter Group. Grain Store was awarded Menu of the Year at the Cateys in 2014.";
}



class RouteCSSTransitionGroup extends React.Component {

  constructor(props, context) {
    super(props, context)

    this.state = {
      previousPathname: null
    }
  }

  componentWillReceiveProps(nextProps, nextContext) {
    if (nextContext.location.pathname !== this.context.location.pathname) {
      this.setState({ previousPathname: this.context.location.pathname })
    }
  }

  render() {
    var children = this.props.children;
    var props = this.props;

    var previousPathname = this.state.previousPathname;
    var tranStyle = {
        marginTop: "-10em"
    }

    return (
      <ReactCSSTransitionGroup {...props}>
        <StaticContainer style={tranStyle}
          key={previousPathname || this.context.location.pathname}
          shouldUpdate={!previousPathname}
        >
          {children}
        </StaticContainer>
      </ReactCSSTransitionGroup>
    )
  }

  componentDidUpdate() {
    if (this.state.previousPathname) {
      this.setState({ previousPathname: null })
    }
  }
}


RouteCSSTransitionGroup.contextTypes = {
  location: React.PropTypes.object
}


// TODO: create actions addItem and removeItem

// TODO: create function to choose props for children (numberOrdered, id, displayName and price)
// TODO: filter menu ie get correct pages

let Basket = React.createClass({

  setTerminal: function(terminal){
    var menu = terminal + "Menu"
    this.setState({
      terminal: terminal,
      basket: getMenu[menu]()
    })
  },

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
      }
      return itemCopy;
    });
    this.setState({
      basket: menu
    });
  },

  getInitialState: function() {
    return {
      basket: getMenu.southMenu()
    };
  },

  getChildrenWithActions: function() {

    let props = {
      actions: {
        addItem: this.addItem,
        removeItem: this.removeItem,
        clearBasket: this.clearBasket,
        clearQuantityOfItem: this.clearQuantityOfItem,
        setMenuType: this.setMenuType,
        setTerminal: this.setTerminal
      },
      helpers: {
        filterMenu: this.filterMenu,
        orderMenu: this.orderMenu,
        filterMenuByQuantity: this.filterMenuByQuantity,
        totalPriceOfItemsInBasket: this.totalPriceOfItemsInBasket,
        numberOfItemsInBasket: this.numberOfItemsInBasket,
        getSubtotalForEachItem: this.getSubtotalForEachItem,
        getUniqueTags: this.getUniqueTags,
        getDescription: getDescription,
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
      <MuiThemeProvider muiTheme={muiTheme}>
      <div>
        <Header />
        <RouteCSSTransitionGroup
          component="div"
          transitionName="example"
          transitionEnterTimeout={200}
          transitionLeaveTimeout={200}>
            <div className=''>{this.getChildrenWithActions()}</div>
        </RouteCSSTransitionGroup>
      </div>
      </MuiThemeProvider>
    );
  }
});

module.exports = Basket;
