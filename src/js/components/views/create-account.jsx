import React from 'react';
import Formsy from 'formsy-react';
import { Input } from 'formsy-react-components';
import { Link } from 'react-router';

let Page = React.createClass({

  render: function() {
    var sharedProps = {
      layout: 'horizontal',
      validatePristine: false
    };
    return (
      <div>
        <Formsy.Form>
          <fieldset>
            <legend>Piccnicc account details</legend>
            <Input
              {...sharedProps}
              name="firstName"
              value=""
              label="First Name"
              type="text"
              placeholder="Enter your first name"
              required
            />
            <Input
              {...sharedProps}
              name="surname"
              value=""
              label="Surname"
              type="text"
              placeholder="Enter your surname"
              required
            />
            <Input
              {...sharedProps}
              name="email"
              value=""
              label="Email"
              type="email"
              autoComplete="off"
              validations={{
                isEmail: true,
              }}
              validationErrors={{
                isEmail: 'You have to type valid email',
              }}
              placeholder="Enter your email"
              required
            />
            <Input
              {...sharedProps}
              name="password1"
              value=""
              label="Password"
              type="password"
              validations="minLength:8"
              validationError="Your password must be at least 8 characters long."
              placeholder="Choose a password"
              required
            />
            <Input
              {...sharedProps}
              name="password2"
              value=""
              label="Confirm password"
              type="password"
              validations="equalsField:password1"
              validationErrors={{
                equalsField: "Passwords must match."
              }}
              placeholder="Retype password"
              required
            />
        </fieldset>
        <fieldset>
          <legend>Payment details</legend>
          <Input
            {...sharedProps}
            name="cardNumber"
            label="Card number"
            value=""
            type="text"
            validations={{
              matchRegexp: /^(\d\d\d\d\d\d\d\d\d\d\d\d\d\d\d\d)$/
            }}
            validationErrors= {{
              matchRegexp: "Please enter a 16 digit number"
            }}
            placeholder="Enter your card number"
            required
          />
          <Input
            {...sharedProps}
            name="expirationDate"
            label="Expiration date"
            value=""
            type="text"
            placeholder="MM/YY"
            required
          />
        </fieldset>
        <fieldset>
          <legend>Billing address</legend>
          <Input
            {...sharedProps}
            name="addressLine1"
            label="Address line 1"
            value=""
            type="text"
            placeholder="Enter the first line of your address"
          />
          <Input
            {...sharedProps}
            name="addressLine2"
            label="Address line 2"
            value=""
            type="text"
            placeholder="Enter the second line of your address"
          />
          <Input
            {...sharedProps}
            name="city"
            label="City"
            value=""
            type="text"
            required
          />
          <Input
            {...sharedProps}
            name="country"
            label="Country"
            value=""
            type="text"
            required
          />
          <Input
            {...sharedProps}
            name="postCode"
            label="Postal code"
            value=""
            type="text"
            required
          />
        </fieldset>
      </Formsy.Form>
      <Link to="/payment">
        <div className="next-button">CREATE ACCOUNT</div>
      </Link>
    </div>
    );
  }
});

module.exports = {
  Page,
  Components: {}
}
