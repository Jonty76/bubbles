import React from 'react';
import { Link } from 'react-router';
import { Input } from 'formsy-react-components';

var Page = React.createClass({
  render: function() {
    var sharedProps = {
      layout: 'horizontal',
      validatePristine: true
    };
    var colorText = {
      color: 'grey',
      textDecoration: 'underline'
    };
    var fontSize = {
      fontSize: '2em'
    };
    return (
      <div>
      <div className='padding-top' style={fontSize}>LOGIN</div>
      <div className='padding-top'>
        <Formsy.Form>
          <Input
            {...sharedProps}
            name="email"
            value=""
            label="Email"
            type="email"
            validations="isEmail"
            placeholder="Enter your email"
          />
          <Input
            {...sharedProps}
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
          <div style={colorText}>Or click here to create an account</div>
        </Link>
      </div>
    </div>
    );
  }
});

module.exports = Page;
