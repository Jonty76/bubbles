import React from "react";
import { Link } from 'react-router';
import RedHeader from '../redHeader.jsx';

let restaurantImages = require('../../data/restaurant-images.jsx');
let orderNumbers = require('../../data/piccniccer-data.js').orderNumbers;
let orders = require('../../data/piccniccer-data.js').orders;

function updateOrders (callback) {
  var outstandingOrders = Object.assign({}, orders);
  orderNumbers.map(function(elem){
    var order = outstandingOrders[elem];
    if (order.pickedUp) {
      delete outstandingOrders[elem];
      callback(outstandingOrders)
    }
  })
}

let PiccniccerOrders = React.createClass({

  getInitialState: function() {
    return {
      outstandingOrders: orders
    };
  },

  componentDidMount: function (){
    var that = this;
    var done = document.getElementsByClassName("done");
    for (var i = 0; i < done.length; i++) {
      done[i].addEventListener('click', function(){
        var orderNo = this.id;
        orders[orderNo].pickedUp = true;
        updateOrders(function(outstandingOrders){
          that.setState({
            outstandingOrders: outstandingOrders
          });
          that.forceUpdate();
        })
      });
    }
  },

  renderOrders: function(){
    var outstandingOrdersCheck = Object.keys(this.state.outstandingOrders).length
    if (outstandingOrdersCheck === 0) {
      return (
        <div>
          <div className="padding">
            <h4 className="red-color center-align">No orders to pick up</h4>
          </div>
          <div className="divider"></div>
        </div>
      )
    } else {
      return orderNumbers.map(function(elem){
        var order = orders[elem];
        if (order.pickedUp === false) {
          var error;
          order.issue ?
            error = (<i className="material-icons red-text icon-margin">error_outline</i>)
          : error = (<i className="material-icons grey-text icon-margin">error_outline</i>)

          return (
            <div>
              <div className="section restaurant-option">
                <div className="row no-margin">
                  <div className="col s1 left-align no-padding">
                    {error}
                  </div>
                  <div className="col s3">
                    <p className="piccniccer-text"><strong>{elem}</strong></p>
                  </div>
                  <div className="col s3">
                    <p className="piccniccer-text">{order.name}</p>
                  </div>
                  <div className="col s3 center-align">
                    {restaurantImages[order.restaurant]}
                  </div>
                  <div id={elem} className="col s2 right-align done">
                    <i className="material-icons grey-text icon-margin">done</i>
                  </div>
                </div>
              </div>
              <div className="divider"></div>
          </div>
          )
        }
      })
    }
  },

  renderPickedUpOrders: function () {
    return orderNumbers.map(function(elem){
      var order = orders[elem];
      if (order.pickedUp) {
        var error;
        order.issue ?
          error = (<i className="material-icons red-text icon-margin">error_outline</i>)
        : error = (<i className="material-icons grey-text icon-margin">error_outline</i>)

        return (
          <div>
            <div className="section restaurant-option">
              <div className="row no-margin">
                <div className="col s1 left-align no-padding">
                  {error}
                </div>
                <div className="col s3">
                  <p className="piccniccer-text"><strong>{elem}</strong></p>
                </div>
                <div className="col s3">
                  <p className="piccniccer-text">{order.name}</p>
                </div>
                <div className="col s3 center-align">
                  {restaurantImages[order.restaurant]}
                </div>
                <div id={elem} className="col s2 right-align">
                  <i className="material-icons red-text icon-margin">done</i>
                </div>
              </div>
            </div>
            <div className="divider"></div>
        </div>
        )
      }
    })
  },

  renderButton: function(){
    var outstandingOrdersCheck = Object.keys(this.state.outstandingOrders).length
    if (outstandingOrdersCheck === 0) {
      return (
        <Link to='/piccniccer-deliveries'>
          <div className="btn-large base-button">ALL PICKED UP</div>
        </Link>
      )
    }
  },

  render: function(){

    return (
      <div className="custom-container">
        <RedHeader text={"Orders"} />

          <div className="row no-margin restaurant-option menu-background">
            <div className="col s3 offset-s1">
              <p className="grey-text piccniccer-title-text"><strong>Order No.</strong></p>
            </div>
            <div className="col s3">
              <p className="grey-text piccniccer-title-text">Name</p>
            </div>
            <div className="col s3">
              <p className="grey-text piccniccer-title-text">Restuarant</p>
            </div>
            <div className="col s2 right-align">
              <p className="grey-text piccniccer-title-text">Done</p>
            </div>
          </div>
          <div className="divider"></div>

          {this.renderOrders()}

          <div className="row no-margin restaurant-option menu-background">
            <div className="col s12">
              <p className="grey-text piccniccer-title-text">PICKED UP</p>
            </div>
          </div>
          <div className="divider"></div>

          {this.renderPickedUpOrders()}

          {this.renderButton()}
      </div>
    )
  }

});

module.exports = PiccniccerOrders;
