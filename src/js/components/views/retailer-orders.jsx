import React from "react";
import { Link } from 'react-router';
import RedHeader from '../red-header.jsx';


let RetailerOrders = React.createClass({

  render: function(){

    return (
      <div className="custom-container">
        <RedHeader text={"Orders"} iconRight={"error_outline"} iconLeft={"arrow_back"} />


      </div>
    )
  }

});

module.exports = RetailerOrders;
