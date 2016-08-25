import React from 'react';
import { Link } from 'react-router';
import Header from '../header.jsx';

let MenuComponent = require('../menu.jsx')

let OrderDetails = React.createClass({

  componentDidMount: function() {
    $(".modal-trigger").click(function(){
      $('#cancel-modal').openModal()
    })

  },

  getCheckoutList: function() {
    var wholeMenu = this.props.basket;
    var filterer = this.props.helpers.filterMenu;
    var quantityFilterer = this.props.helpers.filterMenuByQuantity;
    var structurer = this.props.helpers.orderMenu;
    var quantityFilteredMenu = quantityFilterer(wholeMenu);
    return structurer(quantityFilteredMenu, "restaurant");
  },

  onClick: function(){
    this.props.actions.clearBasket()
    $('#cancel-modal').closeModal()
  },



  render: function() {
    var burgerMenuOptions = ["About+/about", "Start Again+/airport", "Piccnicc Point+/map-view", "Order History+/order-history", "Logout+/login"]
    var menu = this.getCheckoutList();

    return (
      <div className="grey-background desktop-container">
        <Header headerTheme={"whiteNav"} text={"Order Details"} iconRight={"menu"} iconLeft={"arrow_back"} burgerMenuOptions={burgerMenuOptions}/>

        <MenuComponent menu={menu} actions={this.props.actions} inCheckout={true} page={"order-details"}/>

      <div className="button-wrapper center-align">
        <Link to='/basket/select-restaurant'>
          <div className="red-button btn-large">Edit Order</div>
        </Link>
        <div>
          <div className="modal-trigger white-button btn-large">Cancel Order</div>
        </div>


      </div>

        <div id="cancel-modal" className="modal">
          <div className="cancel-modal-container">
            <p className="cancel-modal-text center-align">Are you sure you want to cancel your order?</p>
            <Link to='/order-history'>
              <button className="yes-cancel btn-flat" onClick={this.onClick}>Yes</button>
            </Link>
            <button className="no-cancel btn-flat modal-close">No!</button>
          </div>
        </div>

    </div>
    );
  }
});

module.exports = OrderDetails
