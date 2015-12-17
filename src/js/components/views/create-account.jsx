import React from 'react';
import Formsy from 'formsy-react';
import { Input } from 'formsy-react-components';
import { Link } from 'react-router';

let Page = React.createClass({

  render: function() {
    var sharedProps = {
      layout: 'horizontal',
      validatePristine: true
    };
    return (
      <div>
        <Formsy.Form>
          <fieldset>
            <Input
              {...sharedProps}
              name="firstName"
              value=""
              label="First Name"
              type="text"
              placeholder="Enter your first name"
              help="This is a required text input."
              required
            />
            <Input
              {...sharedProps}
              name="surname"
              value=""
              label="Surname"
              type="text"
              placeholder="Enter your surname"
              help="This is a required text input."
              required
            />
            <Input
              {...sharedProps}
              name="email"
              value=""
              label="Email"
              type="email"
              autoComplete="off"
              placeholder="Enter your email"
              help="This is a required text input."
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
          <Input
            {...sharedProps}
            name="cardNumber"
            label="Card number"
            value=""
            type="text"
            placeholder="Enter your card number"
            help="This is a required text input."
            required
          />
          <Input
            {...sharedProps}
            name="expirationDate"
            label="Expiration date"
            value=""
            type="text"
            placeholder="MM/YY"
            help="This is a required text input."
            required
          />
          <Input
            {...sharedProps}
            name="cvv"
            label="CVV"
            value=""
            type="text"
            placeholder=""
            help="This is a required text input."
            required
          />
          <Input
            {...sharedProps}
            name="cardHolderName"
            label="Card holder name"
            value=""
            type="text"
            placeholder="Enter your name as it appears on card"
            help="This is a required text input."
          />
        </fieldset>
        <fieldset>
          <Input
            {...sharedProps}
            name="addressLine1"
            label="Address line 1"
            value=""
            type="text"
            placeholder="Enter the first line of your address"
            help="This is a required text input."
            required
          />
          <Input
            {...sharedProps}
            name="addressLine2"
            label="Address line 2"
            value=""
            type="text"
            placeholder="Enter the second line of your address"
            help="This is a required text input."
          />
          <Input
            {...sharedProps}
            name="city"
            label="City"
            value=""
            type="text"
            help="This is a required text input."
            required
          />
          <Input
            {...sharedProps}
            name="country"
            label="Country"
            value=""
            type="text"
            help="This is a required text input."
            required
          />
          <Input
            {...sharedProps}
            name="country"
            label="County"
            value=""
            type="text"
            help="This is a required text input."
            required
          />
          <Input
            {...sharedProps}
            name="postCode"
            label="Postal code"
            value=""
            type="text"
            help="This is a required text input."
            required
          />
          <Input
            {...sharedProps}
            name="phone"
            label="Phone"
            value=""
            type="text"
            help="This is a required text input."
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
