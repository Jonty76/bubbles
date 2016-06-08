'use strict';

import React from 'react';
import { render } from 'react-dom';
import { Router, Route, Link, IndexRoute } from 'react-router';
import injectTapEventPlugin from "react-tap-event-plugin";

let About             = require('./components/views/about.jsx');
let AirportNotServed  = require('./components/views/airport-not-served.jsx').Page;
let SelectFlight      = require('./components/views/select-flight.jsx').Page;
let BasketPage        = require('./components/views/basket-page.jsx');
let Menu              = require('./components/views/menu.jsx');
let Basket            = require('./components/basket.jsx');
let Login             = require('./components/views/login.jsx');
let CreateAccount     = require('./components/views/create-account.jsx').Page;
let Payment           = require('./components/views/pay.jsx');
let OrderConfirmation = require('./components/views/order-confirmation.jsx');
let selectRestaurant  = require('./components/views/select-restaurant.jsx');
let SelectAirport     = require('./components/views/select-airport.jsx');


injectTapEventPlugin();



require('../styles/main.js');

let rootElement       = document.getElementById('react-content');

render((
  <Router>
    <Route path="/" component={Basket}>
      <IndexRoute component={SelectAirport} />
      <Route path="about" component={About} />
      <Route path="airport-not-served" component={AirportNotServed} />
      <Route path="select-flight" component={SelectFlight} />
      <Route path="/basket/page" component={BasketPage} />
      <Route path="/basket/menu" component={Menu} />
      <Route path="/basket/select-restaurant" component={selectRestaurant} />
      <Route path="/order-confirmation" component={OrderConfirmation} />
      <Route path="login" component={Login} />
      <Route path="create-account" component={CreateAccount} />
      <Route path="payment" component={Payment} />
    </Route>
  </Router>
),rootElement);
