import React from 'react';
import { Link } from 'react-router';

var OrderPage = React.createClass({
  render: function() {
    return (
      <div>
        <div className="content-wrapper">
          <p>Thank you for your order, your delivery is now being processed.</p>
          <p>A confirmation email has been sent to user@example.com</p>
        </div>
        <Link to="/basket">
          <div className="next-button">ORDER AGAIN</div>
        </Link>
      </div>
    );
  }
});

module.exports = OrderPage;
