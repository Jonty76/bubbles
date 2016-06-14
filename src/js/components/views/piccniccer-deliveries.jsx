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
        />
      </div>
    )
  }

});

module.exports = piccniccerDeliveries;
