import React from "react";
import { Link } from 'react-router';
import Header from '../header.jsx';

let RetailerSingleOrder = require('../retailer-single-order.jsx');
let orderNumbers = require('../../data/order-data.js').orderNumbers;
let orders = require('../../data/order-data.js').orders;


let RetailerOrders = React.createClass({
  componentDidMount: function() {
    $(document).ready(function(){
      $('.collapsible').collapsible({
        accordion : false // A setting that changes the collapsible behavior to expandable instead of the default accordion style
      });
    });
  },

  renderOrders: function() {
    return orderNumbers.map(function(number){
      var orderNo = number
      var order = orders[number]
      return (
        <RetailerSingleOrder
          time={order.time}
          orderNumber={orderNo}
          name={order.name}
          items={order.items}
          details={order.details}
          total={order.total}
        />
      )
    })
  },


  render: function(){

    return (
      <div className="custom-container">
        <Header text={"Orders"} iconRight={"error_outline"} iconLeft={"arrow_back"} />


          <div className="row no-margin restaurant-option menu-background">
            <div className="col s2 m2">
              <p className="grey-text piccniccer-title-text"><strong>Due.</strong></p>
            </div>
            <div className="col s2 m2">
              <p className="grey-text piccniccer-title-text">Order</p>
            </div>
            <div className="col s3 m3">
              <p className="grey-text piccniccer-title-text">Name</p>
            </div>
            <div className="col s2 m2 right-align">
              <p className="grey-text piccniccer-title-text">Items</p>
            </div>
            <div className="col s2 m2 right-align">
              <p className="grey-text piccniccer-title-text">Status</p>
            </div>
          </div>


          <div className="divider"></div>

          <ul className="collapsible" data-collapsible="expandable">
            {this.renderOrders()}
          </ul>


          <div className="row no-margin restaurant-option menu-background">
            <div className="col s12">
              <p className="grey-text piccniccer-title-text">Orders For Next Batch</p>
            </div>
          </div>

          <ul className="collapsible" data-collapsible="expandable">
            <li>
              <div className="collapsible-header">First<i className="material-icons right-align">check_circle</i></div>
              <div className="collapsible-body"><p>Lorem ipsum dolor sit amet.</p></div>
            </li>
            <li>
              <div className="collapsible-header"><i className="material-icons">place</i>Second</div>
              <div className="collapsible-body"><p>Lorem ipsum dolor sit amet.</p></div>
            </li>
            <li>
              <div className="collapsible-header"><i className="material-icons">whatshot</i>Third</div>
              <div className="collapsible-body"><p>Lorem ipsum dolor sit amet.</p></div>
            </li>
          </ul>


      </div>
    )
  }

});

module.exports = RetailerOrders;
