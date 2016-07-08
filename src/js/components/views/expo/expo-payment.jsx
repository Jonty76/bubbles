import React from 'react';
import { Link } from 'react-router';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import Header from '../../header.jsx';
import TextField from 'material-ui/TextField';

let ExpoPayment = React.createClass({

  getInitialState: function() {
    return {
      cardSelected: false,
      card: ""
    };
  },

  componentDidMount: function() {
    // var form = document.getElementById('braintree-payment-form');
    // form.noValidate = true;
    // form.addEventListener('submit', function(event) {
    //   if (!event.target.checkValidity()) {
    //     event.preventDefault();
    //     $("#validation-text").show()
    //   }
    // }, false);

    $.get("/get-client-token", function(data, status){
      braintree.setup(data, 'custom', {
        id: 'braintree-payment-form'
      });
    });
  },

  getCheckoutList: function() {
    var wholeMenu = this.props.basket;
    var filterer = this.props.helpers.filterMenu;
    var quantityFilterer = this.props.helpers.filterMenuByQuantity;
    var structurer = this.props.helpers.orderMenu;
    var quantityFilteredMenu = quantityFilterer(wholeMenu);
    return structurer(quantityFilteredMenu, "restaurant");
  },

  generateOrderNumber: function() {
    return Date.now().toString() + parseInt((Math.random() * 9999)).toString();
  },

  render: function() {
    var burgerMenuOptions = ["About+/expo-about", "Create Order+/", "Order Details+/expo-order-details", "FAQ+/expo-faq"]
    var deliveryTime = localStorage.getItem("deliveryTime").toString();
    var order = JSON.stringify(this.getCheckoutList());
    var orderNumber = this.generateOrderNumber()
    var sendOrder, deliveryPoint, total, tip;

    if (order.length === 2){ //.length is 2 because it's a string
      sendOrder = localStorage.getItem("order")
      deliveryPoint = localStorage.getItem("deliveryPoint")
      total = localStorage.getItem("total")
      tip = localStorage.getItem("tip")
    } else {
      var foodSubtotal = this.props.helpers.totalPriceOfItemsInBasket(this.props.basket);
      sendOrder = order;
      deliveryPoint = this.props.deliveryPoint;
      tip = this.props.tip
      total = foodSubtotal + tip

      localStorage.setItem("order", order)
      localStorage.setItem("deliveryPoint", deliveryPoint)
      localStorage.setItem("total", total)
      localStorage.setItem("tip", tip)
    }

    return (

      <div>
        <div className="custom-container desktop-container">
          <Header headerTheme={"whiteNav"} text={"Pay"} iconRight={"menu"} iconLeft={"arrow_back"} burgerMenuOptions={burgerMenuOptions}/>

            <p id="validation-text" className="validation-text center-align">Please fill in all required fields!</p>

            <form method="POST" action="/process-payment" id="braintree-payment-form">
              <div className="card-input-wrapper">
                <p>First Name *</p>
                <input type="text" autocomplete="off" name='firstName'  />
              </div>

              <div className="card-input-wrapper">
                <p>Last Name *</p>
                <input type="text" autocomplete="off" name='lastName'  />
              </div>

              <div className="card-input-wrapper">
                <p>Email *</p>
                <input type="email" autocomplete="off" name='email'  />
              </div>

              <div className="card-input-wrapper">
                <p>Phone Number *</p>
                <input type="text" autocomplete="off" name='phoneNumber' />
              </div>

              <div className="card-input-wrapper">
                <p>Company</p>
                <input type="text" autocomplete="off" name='company'/>
              </div>

              <div className="card-input-wrapper">
                <p>Name on Card</p>
                <input data-braintree-name="cardholder_name" autocomplete="off" type="text"/>
              </div>

              <div className="card-input-wrapper">
                <p>Card Number *</p>
                <input data-braintree-name="number" id="card-number" type="text" autocomplete="off" maxlength="16"  />
              </div>

              <div className="card-input-wrapper">
                <div className="cvv-wrapper">
                  <p>CVV *</p>
                  <input data-braintree-name="cvv" id="cvv" type="text" autocomplete="off" maxlength="4" />
                </div>
                <div className="expiration-wrapper">
                  <p>Expiration (MM/YYYY) *</p>
                  <input data-braintree-name="expiration_month" id="card-month" type="text" size="2" maxlength="2"  /> /
                  <input data-braintree-name="expiration_year" id="card-year" type="text" size="4"  maxlength="4" required/>
                </div>
              </div>

              <div className="card-input-wrapper">
                <p>Postal Code *</p>
                <input data-braintree-name="postal_code" id="postal-code" type="text" autocomplete="off"  />
              </div>

              <input type="hidden" name="tip" value={tip}></input>
              <input type="hidden" name="total" value={total}></input>
              <input type="hidden" name="orderNumber" value={orderNumber}></input>
              <input type="hidden" name="deliveryPoint" value={deliveryPoint}></input>
              <input type="hidden" name="deliveryTime" value={deliveryTime}></input>
              <input type="hidden" name="order" value={sendOrder}></input>

              <input type="submit" id="submit" value="PAY" className="waves-effect waves-light base-button btn-large"/>
            </form>

        </div>
    </div>
    );
  }
});

module.exports = ExpoPayment;
