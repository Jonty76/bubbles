import React from 'react';
import { Link } from 'react-router';
import Header from '../../header.jsx';

var ExpoOrderFailedPage = React.createClass({

  componentDidMount: function(){
    var isOrder = localStorage.getItem("order");

    if (isOrder === null){
      console.log("no order");
    } else {
      this.props.actions.setExpoState("completed", "", "", "completed")
      this.props.actions.setExpoState("app", "", "", "expo")
    }
  },

  render: function() {

    var burgerMenuOptions = ["About+/expo-about", "Create Order+/", "Order Details+/expo-order-details", "FAQ+/expo-faq"]

    return (

    <div className="custom-container desktop-container">
      <Header headerTheme={"whiteNav"} text={"Order Confirmed"} iconRight={"menu"} iconLeft={"arrow_back"} burgerMenuOptions={burgerMenuOptions}/>
      <div className="order-confirmed-container center-align">

        <p id="large-p">There was an issue with your payment, please try again.</p>

          <div className="button-wrapper center-align">
            <Link to="/expo-payment">
              <div className="btn-large red-button"> TRY PAYMENT AGAIN </div>
            </Link>
          </div>

        </div>

      </div>
    );
  }
});

module.exports = ExpoOrderFailedPage
