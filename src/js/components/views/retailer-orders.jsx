import React from "react";
import { Link } from 'react-router';
import RedHeader from '../red-header.jsx';


let RetailerOrders = React.createClass({

  render: function(){

    return (
      <div className="custom-container">
        <RedHeader text={"Orders"} iconRight={"error_outline"} iconLeft={"arrow_back"} />

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
