import React from 'react';
import { Link } from 'react-router';

let MenuComponent = require('../menu.jsx');
let BasketBar = require('../basket-bar.jsx');

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

    var yoSushiImage= (
    <img className = "restaurant-logo"
      src = "https://cloud.githubusercontent.com/assets/11833296/11876966/475301e4-a4e4-11e5-8207-92838be02f37.jpg"/>
    );

    var pretImage = (
      <img className = "restaurant-logo"
        src = "https://cloud.githubusercontent.com/assets/11833296/11877105/161c52a0-a4e5-11e5-94b4-8217e73260a6.jpg"/>
    );

    var grainStoreImage = (
      <img className = "restaurant-logo"
        src = "https://cloud.githubusercontent.com/assets/11833296/11897909/719aeb9a-a58b-11e5-8680-99488d69bef1.jpeg"/>
    );

    return (
      <div>
          <div className = "restaurant-logo-wrapper">
            {this.props.tagValue === "Pret A Manger"? pretImage : this.props.tagValue === "Yo! Sushi"? yoSushiImage : grainStoreImage}
            <h1 className = "restaurant-name-on-menu">{this.props.tagValue}</h1>
            <h4 className = "restaurant-description-on-menu">{this.props.helpers.getDescription(this.props.tagValue)}</h4>
          </div>
      <MenuComponent menu={menu} actions={this.props.actions} />
        <BasketBar helpers={this.props.helpers} menu={this.props.basket}/>
      </div>
    );
  }
});

module.exports = Menu;
