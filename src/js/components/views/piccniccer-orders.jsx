import React from "react";
import { Link } from 'react-router';

let Piccniccer = require('../piccniccer.jsx');

let piccniccerOrders = React.createClass({

  render: function(){
    return (
      <div>
        <Piccniccer
          headerText={"Pick Ups"}
          subheading={"PICKED UP"}
          restaurantOrPickup={"Restaurant"}
          imageOrPoint={"Image"}
          pickedUpOrDeliveredKey={"pickedUp"}
          message={"No orders to pick up"}
          buttonMessage={"ALL PICKED UP"}
          link={"/piccniccer-deliveries"}
        />
      </div>
    )
  }

});

module.exports = piccniccerOrders;
