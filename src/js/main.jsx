'use strict';

import React from 'react';
import { render } from 'react-dom';
import { Router, Route, Link, IndexRoute } from 'react-router';

let App = require('./components/app.jsx');
let SelectAirport = require('./components/views/select-airport.jsx').Page;
// let Page2 = require('./components/views/page2.jsx');

let rootElement = document.getElementById('react-content');

require('../styles/main.js');

render((
  <Router>
    <Route path="/" component={App} >
      <IndexRoute component={SelectAirport} />
      <Route path="select-airport" component={SelectAirport} />
    </Route>
  </Router>
),rootElement);
