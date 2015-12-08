'use strict';

import React from 'react';
import { render } from 'react-dom';
import { Router, Route, Link } from 'react-router';

let Index = require('./components/app.jsx');
let Page1 = require('./components/page1.jsx');
let Page2 = require('./components/page2.jsx');

let rootElement = document.getElementById('react-content');

require('../styles/main.js');

render((
  <Router>
    <Route path="/" component={Index} />
    <Route path="page2" component={Page2} />
    <Route path="page1" component={Page1} />
  </Router>
),rootElement);
