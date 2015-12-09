import React from 'react';
import Formsy from 'formsy-react';
import { Input,  } from 'formsy-react-components';
// import { Link } from 'react-router';

let Page = React.createClass({
  render: function() {
    return (
      <Formsy.Form>
        <fieldset>
          <Input
            name="firstName"
            value=""
            label="First Name"
            type="text"
            placeholder="Enter your first name"
            help="This is a required text input."
            required
          />
          <Input
            name="surname"
            value=""
            label="Surname"
            type="text"
            placeholder="Enter your surname"
            help="This is a required text input."
            required
          />
          <Input
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
            name="password1"
            value=""
            label="Password"
            type="password"
            validation="minLength:8"
            validationError="Your password must be at least 8 characters long."
            placeholder="Choose a password"
            required
          />
          <Input
            name="password2"
            value=""
            label="Confirm password"
            type="password"
            validation="equalsField:password1"
            validationErrors={{
              equalsField: "Passwords must match."
            }}
            placeholder="Retype password"
            required
          />
      </fieldset>
      <fieldset>
        <Input
          name="cardNumber"
          label="Card number"
          value=""
          type="text"
          placeholder="Enter your card number"
          help="This is a required text input."
          required
        />
        <Input
          name="expirationDate"
          label="Expiration date"
          value=""
          type="text"
          placeholder="MM/YY"
          help="This is a required text input."
          required
        />
        <Input
          name="cvv"
          label="CVV"
          value=""
          type="text"
          placeholder=""
          help="This is a required text input."
          required
        />
        <Input
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
          name="addressLine1"
          label="Address line 1"
          value=""
          type="text"
          placeholder="Enter the first line of your address"
          help="This is a required text input."
          required
        />
        <Input
          name="addressLine2"
          label="Address line 2"
          value=""
          type="text"
          placeholder="Enter the second line of your address"
          help="This is a required text input."
        />
        <Input
          name="city"
          label="City"
          value=""
          type="text"
          help="This is a required text input."
          required
        />
        <Input
          name="country"
          label="Country"
          value=""
          type="text"
          help="This is a required text input."
          required
        />
        <Input
          name="country"
          label="County"
          value=""
          type="text"
          help="This is a required text input."
          required
        />
        <Input
          name="postCode"
          label="Postal code"
          value=""
          type="text"
          help="This is a required text input."
          required
        />
        <Input
          name="phone"
          label="Phone"
          value=""
          type="text"
          help="This is a required text input."
          required
        />
      </fieldset>
      </Formsy.Form>
    );
  }
});

module.exports = {
  Page,
  Components: {
  }
}
