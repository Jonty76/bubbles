import React from "react";
import { Link } from 'react-router';
import RedHeader from './red-header.jsx';
import Issue from './issue.jsx';

let PiccniccerSingleOrder = require('./piccniccer-single-order.jsx');
let restaurantImages = require('../data/restaurant-images.jsx');
let orderNumbers = require('../data/order-data.js').orderNumbers;
let orders = require('../data/order-data.js').orders;

function updateOrders (key, callback) {
  var outstandingOrders = Object.assign({}, orders);
  orderNumbers.map(function(elem){
    var order = outstandingOrders[elem];
    var pickedUpOrDeliveredKey = key
    if (order[pickedUpOrDeliveredKey]) {
      delete outstandingOrders[elem];
      callback(outstandingOrders)
    }
  })
}

function resetObject (page){
  if (page === "/piccniccer-orders") {
    Object.keys(orders).forEach(function(key) {
      orders[key].pickedUp = false;
    });
  } else {
    Object.keys(orders).forEach(function(key) {
      orders[key].delivered = false;
    });
  }
}

let Piccniccer = React.createClass({

  getInitialState: function() {
    return {
      outstandingOrders: orders
    };
  },

  componentDidMount: function (){
    var triggers = document.getElementsByClassName("modal-trigger");
    for (var i = 0; i < triggers.length; i++) {
      triggers[i].addEventListener('click', function(){
        $('#issue-modal').openModal()
      })
    }

    var that = this;
    var done = document.getElementsByClassName("done");
    for (var i = 0; i < done.length; i++) {
      done[i].addEventListener('click', function(){
        var orderNo = this.id;
        var pickedUpOrDeliveredKey = that.props.pickedUpOrDeliveredKey
        orders[orderNo][pickedUpOrDeliveredKey] = true;
        updateOrders(pickedUpOrDeliveredKey, function(outstandingOrders){
          that.setState({
            outstandingOrders: outstandingOrders
          });
          that.forceUpdate();
        })
      });
    }
  },

  renderOrders: function(){
    var that = this;
    var outstandingOrdersCheck = Object.keys(this.state.outstandingOrders).length
    if (outstandingOrdersCheck === 0) {
      return (
        <div>
          <div className="padding">
            <h4 className="red-color center-align">{this.props.message}</h4>
          </div>
          <div className="divider"></div>
        </div>
      )
    } else {
      return orderNumbers.map(function(elem){
        var order = orders[elem];
        var pickedUpOrDeliveredKey = that.props.pickedUpOrDeliveredKey
        if (order[pickedUpOrDeliveredKey] === false) {
          var imageOrPoint;
          var isError;
          that.props.imageOrPoint === "Point" ?
            imageOrPoint = order.point
          : imageOrPoint = restaurantImages[order.restaurant]

          order.issue ?
            isError = (<i className="modal-trigger material-icons red-text icon-margin">error_outline</i>)
          : isError = (<i className="modal-trigger material-icons grey-text icon-margin">error_outline</i>)

          return (
            <div>
              <PiccniccerSingleOrder
                isError={isError}
                orderNumber={elem}
                name={order.name}
                imageOrPoint={imageOrPoint}
                done={"grey-text"}
              />
          </div>
          )
        }
      })
    }
  },

  renderPickedUpOrders: function () {
    var that = this;
    return orderNumbers.map(function(elem){
      var order = orders[elem];
      var pickedUpOrDeliveredKey = that.props.pickedUpOrDeliveredKey
      if (order[pickedUpOrDeliveredKey]) {
        var imageOrPoint;
        var isError;
        that.props.imageOrPoint === "Point" ?
          imageOrPoint = order.point
        : imageOrPoint = restaurantImages[order.restaurant]

        order.issue ?
          isError = (<i className="modal-trigger material-icons red-text icon-margin">error_outline</i>)
        : isError = (<i className="modal-trigger material-icons grey-text icon-margin">error_outline</i>)

        return (
          <div>
            <PiccniccerSingleOrder
              isError={isError}
              orderNumber={elem}
              name={order.name}
              imageOrPoint={imageOrPoint}
              done={"red-text"}
            />
          </div>
        )
      }
    })
  },

  renderButton: function(){
    var outstandingOrdersCheck = Object.keys(this.state.outstandingOrders).length
    var page = this.props.link;
    if (outstandingOrdersCheck === 0) {
      return (
        <Link to={page}>
          <div onClick={resetObject(page)} className="btn-large base-button">{this.props.buttonMessage}</div>
        </Link>
      )
    }
  },

  render: function(){

    return (
      <div className="custom-container">
        <RedHeader text={this.props.headerText} iconRight={"settings"} iconLeft={"error_outline"}/>

          <div className="row no-margin restaurant-option menu-background">
            <div className="col s3 offset-s1">
              <p className="grey-text piccniccer-title-text"><strong>Order No.</strong></p>
            </div>
            <div className="col s3">
              <p className="grey-text piccniccer-title-text">Name</p>
            </div>
            <div className="col s3 center-align">
              <p className="grey-text piccniccer-title-text">{this.props.restaurantOrPickup}</p>
            </div>
            <div className="col s2 right-align">
              <p className="grey-text piccniccer-title-text">Done</p>
            </div>
          </div>
          <div className="divider"></div>

          {this.renderOrders()}

          <div className="row no-margin restaurant-option menu-background">
            <div className="col s12">
              <p className="grey-text piccniccer-title-text">{this.props.subheading}</p>
            </div>
          </div>
          <div className="divider"></div>

          {this.renderPickedUpOrders()}
          <Issue />
          {this.renderButton()}
      </div>
    )
  }

});

module.exports = Piccniccer;
