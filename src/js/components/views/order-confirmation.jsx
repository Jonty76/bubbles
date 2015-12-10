import React from 'react';
import { Link } from 'react-router';

var OrderPage = React.createClass({
  render: function() {
    return (
      <div>
        <p>Thank you for your order, your delivery is now being processed.</p>
        <p>A confirmation email has been sent to user@example.com</p>
        <Link to="/basket">
          <button>ORDER AGAIN</button>
        </Link>
      </div>
    );
  }
});

module.exports = OrderPage;
