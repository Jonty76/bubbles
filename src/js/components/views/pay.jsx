import React from 'react';
import { Link } from 'react-router';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import Header from '../header.jsx';
import BaseButton from '../base-button.jsx';
import TextField from 'material-ui/TextField';

let Page = React.createClass({

  getInitialState: function() {
    return {
      cardSelected: false,
      card: ""
    };
  },

  onChange: function(event, index, value) {
    this.setState({
      cardSelected: true,
      card: value
    });
  },

  renderCVV: function () {
    if(this.state.cardSelected) {
      return (
        <div className="">
          <TextField id="password" hintText="CVV" floatingLabelText="CVV Number" />
        </div>
      )
    }
  },

  render: function() {
    return (

      <div>
        <div className="custom-container">
          <Header headerTheme={"whiteNav"} text={"Pay"} iconRight={"menu"} iconLeft={"arrow_back"}/>

          <div className="row top-container">
            <div className="center-align">
              <SelectField className="dropdown" value={this.state.card} floatingLabelText="Select a Card" onChange={this.onChange}>
                <MenuItem value="Visa ending in --1234" primaryText="Visa ending in --1234" />
                <MenuItem value="Mastercard ending in --5678" primaryText="Mastercard ending in --5678" />
              </SelectField >
              {this.renderCVV()}
            </div>
          </div>
          <BaseButton buttonLink={"/order-confirmation"} buttonText={"Pay"}/>
        </div>
    </div>
    );
  }
});

module.exports = Page;
