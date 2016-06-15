//this file is for demo purposes only to demonstrate a complete order status.
//When full app is being built this file will probably need to be deleted and stepIndex needs to be set in state

import React from 'react';
import { Link } from 'react-router';
import OrderTrack from './order-track.jsx';


let OrderTrackComplete = React.createClass({

  render: function (){
    return (
      <div>
        <OrderTrack stepIndex={4}/>
      </div>
    )
  }
})

module.exports = OrderTrackComplete;
