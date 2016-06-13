import React from "react";
import { Link } from 'react-router';
import RedHeader from '../red-header.jsx';


let RetailerOrders = React.createClass({
  componentDidMount: function() {
    $(document).ready(function(){
      $('.collapsible').collapsible({
        accordion : false // A setting that changes the collapsible behavior to expandable instead of the default accordion style
      });
    });
  },

  render: function(){

    return (
      <div className="custom-container">
        <RedHeader text={"Orders"} iconRight={"error_outline"} iconLeft={"arrow_back"} />


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
            <li>
              <div className="collapsible-header">
                  <div className="row padding no-margin">
                    <div className="col s2 m2 left-align">
                      <p>9.00 am</p>
                    </div>
                    <div className="col s2 m2">
                      <p>82834.</p>
                    </div>
                    <div className="col s3 m3">
                      <p>Lucy Marbles</p>
                    </div>
                    <div className="col s2 m2 right-align">
                      <p>4</p>
                    </div>
                    <div className="col s2 m2">
                      <div className=""><i className="processed material-icons grey-text">check_circle</i></div>
                    </div>
                  </div>
                </div>

              <div className="collapsible-body">
                <div className="retailer-order-details row no-margin padding">
                  <div className="row">
                    <div className="retailer-quantity col s2 m2 left-align"><span>1 x </span></div>
                    <div className="retailer-line-item col s4 m4"><span>Dehydrated crisp vegetable, fruit & mushroom salad in prune vinegar dressing & wood pigeon</span></div>
                    <div className="retailer-price col s1 m1 right-align"><span>£9.00</span></div>
                  </div>
                  <div className="row">
                    <div className="retailer-quantity col s2 m2 left-align"><span>1 x </span></div>
                    <div className="retailer-line-item col s4 m4"><span>Butternut squash ravioli, mustard apricots, rocket & pumpkin seeds</span></div>
                    <div className="retailer-price col s1 m1 right-align"><span>£7.50</span></div>
                  </div>
                  <div className="row">
                    <div className="retailer-quantity col s2 m2 left-align"><span>2 x </span></div>
                    <div className="retailer-line-item col s4 m4"><span>Hot seaweed sushi, glazed pak choi, black garlic purée, hake à la plancha, vanilla butter</span></div>
                    <div className="retailer-price col s1 m1 right-align"><span>£24.00</span></div>
                  </div>
                  <div className="row">
                    <div className="retailer-price col offset-s4 offset-m4 s2 m2 right-align"><span><b>Total: </b></span></div>
                    <div className="retailer-price col s1 m1 right-align"><span> £24.00</span></div>
                  </div>
                </div>
              </div>
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
