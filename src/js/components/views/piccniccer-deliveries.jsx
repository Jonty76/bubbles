import React from "react";
import { Link } from 'react-router';

let Piccniccer = require('../piccniccer.jsx');

let piccniccerDeliveries = React.createClass({

  render: function(){
    return (
      <div>
        <Piccniccer
          headerText={"Deliveries"}
          subheading={"DELIVERED"}
          restaurantOrPickup={"Point"}
          imageOrPoint={"Point"}
          pickedUpOrDeliveredKey={"delivered"}
          message={"No orders to deliver"}
          buttonMessage={"ALL DELIVERED"}
          link={"/piccniccer-orders"}
        />
      </div>
    )
  }

});

module.exports = piccniccerDeliveries;
