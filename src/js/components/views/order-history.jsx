import React from 'react';
import { Link } from 'react-router';
import Header from '../header.jsx';


let ActiveOrders = React.createClass({
  render: function() {
    if (this.props.order.length === 0){
      return (
        <div className="white-background">
          <div className="divider"></div>
            <div className="order-option">
              <h4 className="red-color">No active orders</h4>
            </div>
          <div className="divider"></div>
        </div>
      )
    } else {
      var name;
      var utcDate = (this.props.flightDate).split('23:00')[0];
      var monthyear = utcDate.split(',')[1];

      if (this.props.order.length > 1) {
        name = this.props.order[0].name + " &..."
      } else {
        name = this.props.order[0].name
      }
      return (
        <div className="white-background">
          <div className="divider"></div>
          <div className="order-option">
            <i className="small plane-icon material-icons">flight_takeoff</i>
            <h4 className="order-history-subtitle">{monthyear} - LAX</h4>
            <p className="sub-text">{name}</p>
          </div>
          <div className="active-arrow-div">
            <Link className="red-text" to="/order-track">
              <i className="material-icons">arrow_forward</i>
            </Link>
          </div>
          <div className="divider"></div>
        </div>
      );
    }
  }
});

let PastOrders = React.createClass({

  render: function() {
    return (
      <div className="white-background">
        <div className="divider"></div>
        <div className="order-option">
          <i className="plane-icon material-icons">flight_takeoff</i>
          <h4 className="order-history-subtitle">03 Apr 2016 - CDG</h4>
          <p className="sub-text">Grain Store</p>
        </div>
        <div className="past-arrow-div">
          <Link className="grey-text" to="/order-track-complete">
            <i className="material-icons">arrow_forward</i>
          </Link>
        </div>
        <div className="divider"></div>
          <div className="order-option">
            <i className="plane-icon material-icons">flight_takeoff</i>
            <h4 className="order-history-subtitle" >24 Mar 2016 - NRB</h4>
            <p className="sub-text">Yo! Sushi</p>
          </div>
          <div className="past-arrow-div">
            <Link className="grey-text" to="/order-track-complete">
              <i className="material-icons">arrow_forward</i>
            </Link>
          </div>
          <div className="divider"></div>
      </div>
    );
  }
});


let OrderHistory = React.createClass({
  getCheckoutList: function() {
    var wholeMenu = this.props.basket;
    var filterer = this.props.helpers.filterMenu;
    var quantityFilterer = this.props.helpers.filterMenuByQuantity;
    var structurer = this.props.helpers.orderMenu;
    var quantityFilteredMenu = quantityFilterer(wholeMenu);
    return structurer(quantityFilteredMenu, "restaurant");
  },

  render: function() {
    var burgerMenuOptions = ["About+/about", "Create Order+/", "Piccnicc Point+/map-view", "Order History+/order-history", "Logout+/login"]
    var order = this.getCheckoutList()
    return (
      <div className="grey-background desktop-container">
        <Header headerTheme={"whiteNav"} text={"Your Orders"} iconRight={"menu"} iconLeft={"arrow_back"} burgerMenuOptions={burgerMenuOptions}/>
        <h6 className="subtitle-text">ACTIVE</h6>
        <ActiveOrders order={order} flightDate={this.props.flightDate}/>
        <h6 className="subtitle-text">PAST</h6>
        <PastOrders />
      </div>
    );
  }
});

module.exports = OrderHistory
