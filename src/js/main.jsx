'use strict';

import React from 'react';
import { render } from 'react-dom';
import { Router, Route, Link } from 'react-router';

let Index = require('./components/app.jsx');
let SelectAirport = require('./components/views/select-airport.jsx').Page;
let SelectFlight = require('./components/views/select-flight.jsx').Page;

let rootElement = document.getElementById('react-content');

require('../styles/main.js');

render((
  <Router>
    <Route path="/" component={Index} />
    <Route path="select-airport" component={SelectAirport} />
    <Route path="select-flight" component={SelectFlight} />
  </Router>
),rootElement);
