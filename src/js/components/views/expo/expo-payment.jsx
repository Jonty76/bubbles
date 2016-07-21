import React from 'react';
import { Link } from 'react-router';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import Header from '../../header.jsx';
import TextField from 'material-ui/TextField';

var valid = require('card-validator');

function renderInvalidCard (type, labelId, inputId){
  $("#" + labelId).css("color", "#ED2C31")
  $("#" + inputId).css("border-bottom", "1px solid #ED2C31")
}

function validCard (labelId, inputId) {
  $("#" + labelId).css("color", "#9e9e9e")
  $("#" + inputId).css("border-bottom", "1px solid #9e9e9e")
}

let ExpoPayment = React.createClass({

  getInitialState: function() {
    return {
      cardNumber: "",
      cvv: "",
      expireMonth: "",
      expireYear: "",
      customerName: "",
      email:"",
      phoneNumber: "",
      cardName: ""
    };
  },

  componentWillMount: function(){
    if (this.props.app !== "expo") {
      if(this.props.completed !== "completed"){
        var location = window.location.origin + window.location.pathname
        window.location.href = location
      }
    }

    if (this.props.app === "expo") {
        if(this.props.completed !== "completed"){
        var location = window.location.origin + window.location.pathname
        window.location.href = location
      }
    }

  },

  componentDidMount: function() {
    var that = this;
    // var form = document.getElementById('braintree-payment-form');
    //
    // form.noValidate = true;

    $.get("/get-client-token", function(data, status){
      braintree.setup(data, 'custom', {
        id: 'braintree-payment-form'
      });
    });

    // document.getElementById("submit-order-button").addEventListener('click', function(event) {
    //
    //   var formValid = Object.keys(that.state).map(function(elem){
    //     if(that.state[elem] === "") {
    //       return false
    //     } else {
    //       return true
    //     }
    //   })
    //
    //   var emailValid;
    //   if (that.state.email.indexOf("@") > -1 && that.state.email.indexOf(".") > -1) {
    //     emailValid = true;
    //   } else {
    //     emailValid = false;
    //   }
    //
    //   if (!emailValid || formValid.indexOf(false) > -1) {
    //     console.log("dont submit");
    //     event.preventDefault();
    //     $("#validation-text").show()
    //     $("html, body").animate({ scrollTop: 0 }, "slow");
    //   } else {
    //     console.log("submit");
    //     // document.getElementById("submit-order-button").removeEventListener('click', false)
    //     document.getElementById("submit-order-button").disabled = true;
    //     // form.submit();
    //   }
    // });


    $("#card-number").change(function() {
      var number = $("#card-number").val().substring(0,4)
      var numberValidation = valid.number(number);
      if (!numberValidation.isPotentiallyValid) {
        renderInvalidCard("card number", "card-number-label", "card-number");
      }

      if (numberValidation.card) {
        if(numberValidation.card.type === "american-express"){
          if (this.value.length === 15) {
            that.setState({
              cardNumber: "valid"
            })
            validCard("card-number-label", "card-number")
          } else {
            that.setState({
              cardNumber: ""
            })
            renderInvalidCard("card number", "card-number-label", "card-number");
          }
        } else {
          if (this.value.length === 16) {
            that.setState({
              cardNumber: "valid"
            })
            validCard("card-number-label", "card-number")
          } else {
            that.setState({
              cardNumber: ""
            })
            renderInvalidCard("card number", "card-number-label", "card-number");
          }
        }
      }
    });

    $("#card-month").change(function() {
      var month = $("#card-month").val()
      var monthValidation = valid.expirationMonth(month);
      if (!monthValidation.isPotentiallyValid) {
        that.setState({
          expireMonth: ""
        })
        renderInvalidCard("expiration month", "expire-label", "card-month");
      } else {
        that.setState({
          expireMonth: "valid"
        })
        validCard("expire-label", "card-month")
      }
    })

    $("#card-year").change(function() {
      var year = $("#card-year").val()
      var yearValidation = valid.expirationYear(year);
      if (!yearValidation.isPotentiallyValid) {
        that.setState({
          expireYear: ""
        })
        renderInvalidCard("expiration year", "expire-label", "card-year");
      } else {
        that.setState({
          expireYear: "valid"
        })
        validCard("expire-label", "card-year")
      }
    })

    $("#cvv").change(function() {
      var cvv = $("#cvv").val()
      var cvvValidation = valid.cvv(cvv, 4);
      if (!cvvValidation.isPotentiallyValid) {
        that.setState({
          cvv: ""
        })
        renderInvalidCard("cvv number", "cvv-label", "cvv");
      } else {
        if (this.value.length <= 2) {
          that.setState({
            cvv: ""
          })
          renderInvalidCard("cvv number", "cvv-label", "cvv");
        } else {
          that.setState({
            cvv: "valid"
          })
          validCard("cvv-label", "cvv")
        }
      }
    })
  },

  submitForm: function (event) {
    var that = this;
    var form = $('#braintree-payment-form');
    form.noValidate = true;

    var formValid = Object.keys(this.state).map(function(elem){
      if(that.state[elem] === "") {
        return false
      } else {
        return true
      }
    })

    var emailValid;
    if (this.state.email.indexOf("@") > -1 && this.state.email.indexOf(".") > -1) {
      emailValid = true;
    } else {
      emailValid = false;
    }

    if (!emailValid || formValid.indexOf(false) > -1) {
      event.preventDefault();
      console.log("dont submit");
      $("#validation-text").show()
      $("html, body").animate({ scrollTop: 0 }, "slow");
    } else {
      console.log("submit");
      document.forms[0].onsubmit = function () {
        console.log("hereeeeee");
        $("#submit-order-button").attr("disabled", true);
        return false;
      }
    }
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
    var longNumber = Date.now().toString() + parseInt((Math.random() * 9999)).toString();
    return longNumber.substr(longNumber.length - 8);
  },

  selectorChange: function (keyName, event){
    var change = {};
    change[keyName] = event.target.value;
    this.setState(change);
  },

  render: function() {
    var burgerMenuOptions = ["About+/expo-about", "Start Again+/", "Order Details+/expo-order-details", "FAQ+/expo-faq"];
    var deliveryTime = localStorage.getItem("deliveryTime").toString();
    var order = JSON.stringify(this.getCheckoutList());
    var orderNumber = this.generateOrderNumber();
    var sendOrder, deliveryPoint, total, tip, expoName, expoCenter;

    if (order.length === 2){ //.length is 2 because it's a string
      sendOrder = localStorage.getItem("order");
      deliveryPoint = localStorage.getItem("deliveryPoint");
      total = localStorage.getItem("total");
      tip = localStorage.getItem("tip");
      expoName = localStorage.getItem("expoName")
      expoCenter = localStorage.getItem("expoCenter")
    } else {
      var foodSubtotal = this.props.helpers.totalPriceOfItemsInBasket(this.props.basket);
      sendOrder = order;
      deliveryPoint = this.props.deliveryPoint;
      tip = this.props.tip;
      total = foodSubtotal + tip;
      expoName = this.props.selectedExpo;
      expoCenter = this.props.selectedExpoCenter;

      localStorage.setItem("order", order);
      localStorage.setItem("deliveryPoint", deliveryPoint);
      localStorage.setItem("total", total);
      localStorage.setItem("tip", tip);
      localStorage.setItem("expoName", expoName);
      localStorage.setItem("expoCenter", expoCenter);
    }

    return (

      <div>
        <div className="custom-container desktop-container">
          <Header headerTheme={"whiteNav"} text={"Pay"} iconRight={"menu"} iconLeft={"arrow_back"} burgerMenuOptions={burgerMenuOptions}/>

            <p id="validation-text" className="validation-text center-align">Please fill in all required fields correctly!</p>

            <form method="POST" action="/process-payment" id="braintree-payment-form">
              <div className="card-input-wrapper">
                <p>Name *</p>
                <input type="text" autocomplete="off" name='customerName' onChange={this.selectorChange.bind(this, 'customerName')}/>
              </div>

              <div className="card-input-wrapper">
                <p id="email-label">Email *</p>
                <input id="email-input" type="email" autocomplete="off" name='email' onChange={this.selectorChange.bind(this, 'email')}/>
              </div>

              <div className="card-input-wrapper">
                <p>Phone Number *</p>
                <input type="text" autocomplete="off" name='phoneNumber' onChange={this.selectorChange.bind(this, 'phoneNumber')}/>
              </div>

              <div className="card-input-wrapper">
                <p>Name on Card *</p>
                <input data-braintree-name="cardholder_name" autocomplete="off" type="text" onChange={this.selectorChange.bind(this, 'cardName')}/>
              </div>

              <div className="card-input-wrapper">
                <p id="card-number-label">Card Number *</p>
                <input data-braintree-name="number" id="card-number" type="text" autocomplete="off"/>
              </div>

              <div className="card-input-wrapper">
                <div className="cvv-wrapper">
                  <p id="cvv-label">CVV *</p>
                  <input data-braintree-name="cvv" id="cvv" type="text" autocomplete="off"/>
                </div>
                <div className="expiration-wrapper">
                  <p id="expire-label">Expiration (MM/YYYY) *</p>
                  <input data-braintree-name="expiration_month" id="card-month" type="text" size="2"/> /
                  <input data-braintree-name="expiration_year" id="card-year" type="text" size="4"/>
                </div>
              </div>

              <div className="card-input-wrapper">
                <p>Postal Code *</p>
                <input data-braintree-name="postal_code" id="postal-code" type="text" autocomplete="off"  />
              </div>

              <input type="hidden" name="expoCenter" value={expoCenter}></input>
              <input type="hidden" name="expoName" value={expoName}></input>
              <input type="hidden" name="tip" value={tip}></input>
              <input type="hidden" name="total" value={total}></input>
              <input type="hidden" name="orderNumber" value={orderNumber}></input>
              <input type="hidden" name="deliveryPoint" value={deliveryPoint}></input>
              <input type="hidden" name="deliveryTime" value={deliveryTime}></input>
              <input type="hidden" name="order" value={sendOrder}></input>

              <button role="submit" id="submit-order-button" className="waves-effect waves-light base-button btn-large" onClick={this.submitForm}>PAY</button>
            </form>

        </div>
    </div>
    );
  }
});

module.exports = ExpoPayment;
