import React from 'react';
import { Link } from 'react-router';

let MenuComponent = require('../menu.jsx');

var Menu = React.createClass({
  getStructuredMenu: function() {
    var filterer = this.props.helpers.filterMenu;
    var structurer = this.props.helpers.orderMenu;
    var filteredMenu = filterer(this.props.basket, "restaurant", "Pret");
    return structurer(filteredMenu, "foodType");
  },

  render: function() {
    var menu = this.getStructuredMenu();
    console.log(menu);
    return (
      <div>
        <MenuComponent menu={menu} actions={this.props.actions} />
      </div>
    );
  }
});

module.exports = Menu;
