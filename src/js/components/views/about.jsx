import React from 'react';
import { Link } from 'react-router';
import Slogan from '../slogan.jsx';

var About = React.createClass({
  render: function() {
    var fontSize = {
      fontSize: '1em'
    };
    return (
      <div>
        <Slogan />
        <p style={fontSize} className='view-text'> Piccnicc is an online ordering service, which delivers tasty food from airport restaurants to passengers at the gate. </p>
        <p style={fontSize} className='view-text'>Whether you're rushing to make a connection or just don't want to wait in line, nobody should have to eat bland, unhealthy plane food. </p>
        <p style={fontSize} className='view-text'>Piccnicc is also perfect for passengers who want to eat at the gate, rather than in-flight.</p>
        <p style={fontSize} className='view-text'>We hope you enjoy our service and wish you a safe flight.</p>
        <p style={fontSize} className='view-text'>Piccnicc - Hampers of Happiness, Delivered</p>
        <p style={fontSize} className='view-text'>Visit us at <a href='http://www.piccnicc.com/'>piccnicc.com</a></p>
        <p style={fontSize} className='view-text'>Follow us on <a href='https://twitter.com/piccniccapp'>twitter.com/piccniccapp</a> #nomoregreychicken</p>
        <br/>
      </div>

    );
  }
});

module.exports = About;
