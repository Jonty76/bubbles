import React from 'react';
import { Link } from 'react-router';
import Header from '../header.jsx';


let OrderDetails = React.createClass({
  render: function() {
    var burgerMenuOptions = ["About+/about", "Create Order+/", "Order History+/order-history", "Logout+/login"]

    return (
      <div className="grey-background">
        <Header headerTheme={"whiteNav"} text={"Order Details"} iconRight={"menu"} iconLeft={"arrow_back"} burgerMenuOptions={burgerMenuOptions}/>

      </div>
    );
  }
});

module.exports = OrderDetails
