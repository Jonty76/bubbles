import React from 'react';
import { Link } from 'react-router';
import Header from '../../header.jsx';

var ExpoOrderFailedPage = React.createClass({

  componentDidMount: function(){
    var isOrder = localStorage.getItem("order");

    if (isOrder === null){
      console.log("No Order");
    } else {
      this.props.actions.setExpoState("completed", "", "", "completed")
      this.props.actions.setExpoState("app", "", "", "expo")
    }
  },

  render: function() {

    var burgerMenuOptions = ["About+/expo-about", "Start Again+/events", "Order Details+/expo-order-details", "FAQ+/expo-faq"]

    return (

    <div className="custom-container desktop-container">
      <Header headerTheme={"whiteNav"} text={"Oops..."} iconRight={"menu"} iconLeft={""} burgerMenuOptions={burgerMenuOptions}/>
      <div className="order-confirmed-container center-align">

        <p className="large-p">There was an issue with your payment.</p>
        <p className="large-p">Please try again.</p>

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
