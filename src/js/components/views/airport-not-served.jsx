import React from 'react';
import Formsy from 'formsy-react';
import { Input } from 'formsy-react-components';
import { Link } from 'react-router';
import Header from '../header.jsx';


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
      <div className="airportSubmitted">
        <p className ="view-text p-top-margin">Thank you for letting us know!</p>
        <p className='view-text'> We'll update you as soon as we have something newsworthy - in the meantime, safe travels and by all means follow us on <a href='https://twitter.com/piccniccapp' target='_blank'>twitter</a> or contact Jonny anytime on <a className="link-text" href="mailto:jonny@piccnicc.com">jonny@piccnicc.com</a></p>
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
        <div>
          <input
            type="submit"
            defaultValue="SUBMIT"
            style={{border: "solid red 1px",
              backgroundColor: "#ED2C31",
              color: "white",
              width: "50%"}}
            />
        </div>
      </Formsy.Form>
    );
    var burgerMenuOptions = ["About+/about", "Start Again+/airport", "Order History+/order-history", "Logout+/login"]

    return (
      <div>
      <Header headerTheme={"whiteNav"} text={"Piccnicc"} iconRight={"menu"} iconLeft={"arrow_back"} burgerMenuOptions={burgerMenuOptions}/>
      <div className="center-align desktop-container">
        <div className="airport-not-served-container">
          <p className='top-line'>Sorry, you can't get Piccnicc at that Airport yet.</p>
          <p>However, the more demand we can show for the service, the sooner we can launch it there.
          Please provide your email address below so we can add your support and update you when the time comes.
         </p>
         {this.state.emailSubmitted ? submittedText : submitForm}
         <div className="">
           <img className="logo-container" src="/piccnicclogo.png" alt="Piccnicc Logo"></img>
         </div>
        <div className="terms">
           <p className='piccnicc-slogan'>Hampers of Happiness, Delivered</p>
           <p className='view-text'>Follow us on <a className="link-text" href='https://twitter.com/piccniccapp' target='_blank'>twitter.com/piccniccapp</a> #nomoregreychicken</p>
           <p>Click for our <Link className="link-text" to="/expo-terms">Terms & Conditions</Link> and <Link className="link-text" to="/expo-privacy">Privacy Policy</Link></p>
        </div>
       </div>
    </div>
  </div>
    );
  }
});

module.exports = {
  Page,
  Components: {}
}
