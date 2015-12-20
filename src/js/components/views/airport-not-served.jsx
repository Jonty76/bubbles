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
    var sidePadding = {
      paddingLeft: '10em'
    };
    var fontSize = {
      fontSize: '1em'
    };
    var smallerFont = {
      fontSize: '1.1em'
    };
    var submittedText = (
      <div>
        <p className = "view-text" style={fontSize}>Thank you for adding your voice to the call for Piccnicc to be introduced to Heathrow Airport!</p>
        <p className='view-text' style={fontSize}> We'll update you as soon as we have something newsworthy - in the meantime, safe travels and by all means follow us on <a href='https://twitter.com/piccniccapp'>twitter</a> or contact us anytime through our <a href='http://www.piccnicc.com/'>website.</a></p>
      </div>
    );
    var submitForm = (
      <Formsy.Form onSubmit={this.submitForm}>
        <div className ='padding'>
          <Input
            placeholder="Email"
            name="emailInput"
            validations={{
              isEmail: true,
            }}
            />
        </div>
        <div style={sidePadding}>
          <input
            type="submit"
            defaultValue="SUBMIT"
            />
        </div>
      </Formsy.Form>
    );
    return (
      <div>

        <p className='view-text' style={smallerFont}>
          Sorry, you can't get Piccnicc at Heathrow Airport yet.
          However, the more demand we can show for the service, the sooner we can launch it there.
          Please provide your email address below so we can add your support and update you when the time comes.
         </p>
         {this.state.emailSubmitted ? submittedText : submitForm}
         <p style={fontSize} className='view-text'>Piccnicc - Hampers of Happiness, Delivered</p>
         <p style={fontSize} className='view-text'>Visit us at <a href='http://www.piccnicc.com/'>piccnicc.com</a></p>
         <p style={fontSize} className='view-text'>Follow us on <a href='https://twitter.com/piccniccapp'>twitter.com/piccniccapp</a> #nomoregreychicken</p>
         <p style={fontSize} className='view-text'>Privacy Policy: We promise never to share your email or any other details with anybody else, ever. Nobody. Never.</p>
      </div>
    );
  }
});

module.exports = {
  Page,
  Components: {}
}
