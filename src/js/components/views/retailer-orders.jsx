import React from "react";
import { Link } from 'react-router';
import Header from '../header.jsx';
import Issue from '../issue.jsx';

let RetailerSingleOrder = require('../retailer-single-order.jsx');
let orderNumbers = require('../../data/order-data.js').orderNumbers;
let orders = require('../../data/order-data.js').orders;


let RetailerOrders = React.createClass({

  getInitialState: function() {
    return {
      batchOne: [],
      batchTwo: []
    }
  },

  componentWillMount: function() {
    var that = this
    var batchOne = []
    var batchTwo = []

    orderNumbers.map(function(number){
      var orderNo = number
      var order = orders[number]

      if (order.time === "9.00 am") {
        batchOne.push(orderNo)
      } else if (order.time === "10.30 am"){
        batchTwo.push(orderNo)
      } else {
        console.log("No batches")
      }

      if (batchOne.length === 4) {
        that.setState({
          batchOne: batchOne,
          batchTwo: batchTwo
        })
      }
    })
  },


  componentDidMount: function() {
    $(document).ready(function(){
        $('.collapsible').collapsible({
          accordion : false
        })

        var triggers = document.getElementsByClassName("modal-trigger");
        for (var i = 0; i < triggers.length; i++) {
          var trigger = triggers[i]
          trigger.addEventListener('click', function(){
            $('#issue-modal').openModal()
          })
        }


        $(".processed-icon").click(function(){
          $(this).toggleClass("processed-icon-style")
          $(this).closest("li").toggleClass("processed")
        })

    })
  },



  renderOrders: function(batch) {
    return batch.map(function(number){
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
    var burgerMenuOptions = ["About+/about", "Logout+/login"]
    return (
      <div className="custom-container">
        <Header headerTheme={"redNav"} text={"Orders"} iconRight={"menu"} iconLeft={"error_outline"} burgerMenuOptions={burgerMenuOptions}/>


          <div className="row no-margin restaurant-option menu-background">
            <div className="col s1 m1">
              <p className="grey-text piccniccer-title-text"><strong>Issue</strong></p>
            </div>
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
            {this.renderOrders(this.state.batchOne)}
          </ul>


          <div className="row no-margin restaurant-option menu-background">
            <div className="col s12">
              <p className="grey-text piccniccer-title-text">Orders For Next Batch</p>
            </div>
          </div>

          <ul id="next-batch" className="collapsible" data-collapsible="expandable">
            {this.renderOrders(this.state.batchTwo)}
          </ul>

          <Issue />

      </div>
    )
  }

});

module.exports = RetailerOrders;
