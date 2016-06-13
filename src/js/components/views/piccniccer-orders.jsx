import React from "react";
import { Link } from 'react-router';
import RedHeader from '../red-header.jsx';

let restaurantImages = require('../../data/restaurant-images.jsx');

let PiccniccerOrders = React.createClass({

  render: function(){

    return (
      <div className="custom-container">
        <RedHeader text={"Orders"} />

          <Link to="">
            <div className="section restaurant-option">
              <div className="row no-margin">
                <div className="col s8">
                  <p className="restaurant-name"></p>
                  <p className="restaurant-decription">Description</p>
                </div>
                <div className="col s4 right-align">
                  {restaurantImages["YO! Sushi"]}
                </div>
              </div>
            </div>
            <div className="divider"></div>
          </Link>

          <Link to="">
            <div className="section restaurant-option">
              <div className="row no-margin">
                <div className="col s8">
                  <p className="restaurant-name"></p>
                  <p className="restaurant-decription">Description</p>
                </div>
                <div className="col s4 right-align">
                  {restaurantImages["YO! Sushi"]}
                </div>
              </div>
            </div>
            <div className="divider"></div>
          </Link>
      </div>
    )
  }

});

module.exports = PiccniccerOrders;
