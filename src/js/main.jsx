'use strict';

import React from 'react';
import { render } from 'react-dom';
import { Router, Route, Link, IndexRoute } from 'react-router';

let App               = require('./components/app.jsx');
let About             = require('./components/views/about.jsx');
let AirportNotServed  = require('./components/views/airport-not-served.jsx').Page;
let SelectAirport     = require('./components/views/select-airport.jsx').Page;
let SelectFlight      = require('./components/views/select-flight.jsx').Page;
let Basket            = require('./components/views/basket.jsx');
let Login             = require('./components/views/login.jsx');
let CreateAccount     = require('./components/views/create-account.jsx').Page;
let Payment           = require('./components/views/pay.jsx');
let OrderConfirmation = require('./components/views/order-confirmation.jsx');

require('../styles/main.js');

let rootElement       = document.getElementById('react-content');

render((
  <Router>
    <Route path="/" component={App} >
      <IndexRoute component={SelectAirport} />
      <Route path="about" component={About} />
      <Route path="airport-not-served" component={AirportNotServed} />
      <Route path="select-airport" component={SelectAirport} />
      <Route path="select-flight" component={SelectFlight} />
      <Route path="basket" component={Basket} />
      <Route path="login" component={Login} />
      <Route path="create-account" component={CreateAccount} />
      <Route path="payment" component={Payment} />
      <Route path="order-confirmation" component={OrderConfirmation} />
    </Route>
  </Router>
),rootElement);
