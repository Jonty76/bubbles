'use strict';

import React from 'react';
import { render } from 'react-dom';
import { Router, Route, Link } from 'react-router';

let Index = require('./components/app.jsx');
let SelectAirport = require('./components/views/select-airport.jsx').Page;
// let Page2 = require('./components/views/page2.jsx');

let rootElement = document.getElementById('react-content');

require('../styles/main.js');

render((
  <Router>
    <Route path="/" component={Index} />
    <Route path="select-airport" component={SelectAirport} />
  </Router>
),rootElement);
