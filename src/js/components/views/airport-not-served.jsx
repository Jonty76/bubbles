import React from 'react';
import Formsy from 'formsy-react';
import { Input } from 'formsy-react-components';
import { Link } from 'react-router';


let Page = React.createClass({

  getInitialState: function() {
      return {
        emailSubmitted: false
      };
  },

  submitForm: function() {
    this.setState({
      emailSubmitted: true
    });
  },

  render: function() {
    var submittedText = (
      <p>Thank You!</p>
    );
    var submitForm = (
      <Formsy.Form onSubmit={this.submitForm}>
        <Input
          placeholder="Email"
          name="emailInput"
          />
        <input
          type="submit"
          defaultValue="Submit"
          />
      </Formsy.Form>
    );
    return (
      <div>
        <Link to='/basket'>CHANGE THIS</Link>
        <p>
          Sorry we do not currently serve this airport.
          Enter your email and we'll update you when we do!
         </p>
         {this.state.emailSubmitted ? submittedText : submitForm}
      </div>
    );
  }
});

module.exports = {
  Page,
  Components: {}
}
