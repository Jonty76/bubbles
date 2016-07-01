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

  formSubmit: function() {

  },

  render: function() {
    var burgerMenuOptions = ["About+/about", "Create Order+/", "Piccnicc Point+/map-view", "Order History+/order-history", "Logout+/login"]

    return (

      <div>
        <div className="custom-container desktop-container">
          <Header headerTheme={"whiteNav"} text={"Pay"} iconRight={"menu"} iconLeft={"arrow_back"} burgerMenuOptions={burgerMenuOptions}/>

            <form onsubmit={this.formSubmit} action="/process-payment" method="POST" id="braintree-payment-form">
              <div className="card-input-wrapper">
                <p>First Name *</p>
                <input type="text" autocomplete="off" name='firstName' required />
              </div>

              <div className="card-input-wrapper">
                <p>Last Name *</p>
                <input type="text" autocomplete="off" name='lastName' required />
              </div>

              <div className="card-input-wrapper">
                <p>Email *</p>
                <input type="email" autocomplete="off" name='email' required />
              </div>

              <div className="card-input-wrapper">
                <p>Phone Number *</p>
                <input type="text" autocomplete="off" name='phoneNumber' required/>
              </div>

              <div className="card-input-wrapper">
                <p>Company</p>
                <input type="text" autocomplete="off" name='company'/>
              </div>

              <div className="card-input-wrapper">
                <p>Card Number *</p>
                <input type="text" autocomplete="off" data-encrypted-name="number" maxlength="16" required />
              </div>

              <div className="card-input-wrapper">
                <div className="cvv-wrapper">
                  <p>CVV *</p>
                  <input type="text" autocomplete="off" data-encrypted-name="cvv" maxlength="3" required/>
                </div>
                <div className="expiration-wrapper">
                  <p>Expiration (MM/YYYY) *</p>
                  <input id="card-month" type="text" size="2" data-encrypted-name="month" maxlength="2" required /> /
                  <input id="card-year" type="text" size="4" data-encrypted-name="year"  maxlength="4" required/>
                </div>
              </div>

              <input type="submit" id="submit" value="PAY" className="waves-effect waves-light base-button btn-large"/>
            </form>

        </div>
    </div>
    );
  }
});

module.exports = ExpoPayment;
