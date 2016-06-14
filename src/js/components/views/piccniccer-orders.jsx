import React from "react";
import { Link } from 'react-router';

let Piccniccer = require('../piccniccer.jsx');

let piccniccerOrders = React.createClass({

  render: function(){
    return (
      <div>
        <Piccniccer
          restaurantOrPickup={"Restaurant"}
          imageOrPoint={"image"}
        />
      </div>
    )
  }

});

module.exports = piccniccerOrders;
