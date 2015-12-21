import React from 'react';
import { FoodType } from './food-type.jsx';
import { Link } from 'react-router';

let ChooseMore = React.createClass({
  render: function() {
    var chooseMoreStyling = {
      marginBottom: '4em'
    };
    return this.props.show ? (
      <Link to='/basket/select-menu'>
        <div
          style={chooseMoreStyling}
          className="order-more-link pull-left"
        >
          <h4>Order More</h4>
        </div>
      </Link>
    ) : (
      <div></div>
    );
  }
});

let Menu = React.createClass({
  render: function() {
    return (
      <div>
        {this.props.menu.map(function(foodType) {
          return (
            <div className="menu-section">
              <FoodType {...foodType} actions={this.props.actions} inCheckout={this.props.inCheckout} />
            </div>
          );
        }.bind(this))}
        <ChooseMore show={this.props.showBackLink} />
      </div>
    );
  }
});

module.exports = Menu;
