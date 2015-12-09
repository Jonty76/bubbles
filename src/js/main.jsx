'use strict';

import React from 'react';
import { render } from 'react-dom';
import { Router, Route, Link, IndexRoute } from 'react-router';

let App = require('./components/app.jsx');
let SelectAirport = require('./components/views/select-airport.jsx').Page;

let SelectFlight = require('./components/views/select-flight.jsx').Page;

let About = require('./components/views/about.jsx');
let rootElement = document.getElementById('react-content');
let AirportNotServed = require('./components/views/airport-not-served.jsx').Page;
let CreateAccount = require('./components/views/create-account.jsx').Page;


require('../styles/main.js');

render((
  <Router>
    <Route path="/" component={App} >
      <IndexRoute component={SelectAirport} />
      <Route path="about" component={About} />
      <Route path="create-account" component={CreateAccount} />
      <Route path="select-airport" component={SelectAirport} />
      <Route path="select-flight" component={SelectFlight} />
     <Route path="airport-not-served" component={AirportNotServed} />
    </Route>

  </Router>
),rootElement);
