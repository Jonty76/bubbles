import React from 'react';
import { Link } from 'react-router';
import { Input } from 'formsy-react-components';

var Page = React.createClass({
  render: function() {
    console.log("rendering login page");
    return (
      <div>
        <Formsy.Form>
          <Input
            name="email"
            value=""
            label="Email"
            type="email"
            placeholder="Enter your email"
          />
          <Input
            name="password1"
            value=""
            label="Password"
            type="password"
            placeholder="Enter password"
          />
        </Formsy.Form>
        <Link to="/payment">
          <div className="next-button">LOG IN</div>
        </Link>
        <Link to="create-account">
          <button>Or click here to create an account</button>
        </Link>
      </div>
    );
  }
});

module.exports = Page;
