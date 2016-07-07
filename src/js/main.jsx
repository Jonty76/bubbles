'use strict';

import React from 'react';
import { render } from 'react-dom';
import { Router, Route, Link, IndexRoute, hashHistory } from 'react-router';
import injectTapEventPlugin from "react-tap-event-plugin";

let About                 = require('./components/views/about.jsx');
let AirportNotServed      = require('./components/views/airport-not-served.jsx').Page;
let BasketPage            = require('./components/views/basket-page.jsx');
let Menu                  = require('./components/views/menu.jsx');
let Basket                = require('./components/basket.jsx');
let MapView               = require('./components/views/map-view.jsx');
let Login                 = require('./components/views/login.jsx');
let Payment               = require('./components/views/pay.jsx');
let OrderConfirmation     = require('./components/views/order-confirmation.jsx').OrderPage;
let OrderDetails          = require('./components/views/order-details.jsx')
let OrderTrack            = require('./components/views/order-track.jsx');
let OrderTrackComplete    = require('./components/views/order-track-complete.jsx');
let OrderHistory          = require('./components/views/order-history.jsx');
let selectRestaurant      = require('./components/views/select-restaurant.jsx');
let SelectAirport         = require('./components/views/select-airport.jsx');
let PiccniccerOrders      = require('./components/views/piccniccer-orders.jsx');
let PiccniccerDeliveries  = require('./components/views/piccniccer-deliveries.jsx');
let RetailerOrders        = require('./components/views/retailer-orders.jsx');

/* Expo MVP */
let ExpoAbout             = require('./components/views/expo/expo-about.jsx');
let ExpoOrderDetails      = require('./components/views/expo/expo-order-details.jsx');
let ExpoLanding           = require('./components/views/expo/expo-landing.jsx');
let ExpoPayment           = require('./components/views/expo/expo-payment.jsx');
let ExpoFaq               = require('./components/views/expo/expo-faq.jsx');
let ExpoOrderConfirmed    = require('./components/views/expo/expo-order-confirmed-page.jsx')
let ExpoOrderNotTaken     = require('./components/views/expo/expo-order-not-taken-page.jsx')
let ExpoCancelOrder       = require('./components/views/expo/expo-cancel-order.jsx')



injectTapEventPlugin();



require('../styles/main.js');

let rootElement       = document.getElementById('react-content');

render((
  <Router history={hashHistory}>
    <Route path="/" component={Basket}>
      <IndexRoute component={ExpoLanding} />
      <Route path="expo-faq" component={ExpoFaq} />

      <Route path="about" component={About} />
      <Route path="airport-not-served" component={AirportNotServed} />
      <Route path="airport" component={SelectAirport} />
      <Route path="/basket/page" component={BasketPage} />
      <Route path="/basket/menu" component={Menu} />
      <Route path="/basket/select-restaurant" component={selectRestaurant} />
      <Route path="/map-view" component={MapView} />
      <Route path="/order-confirmation" component={OrderConfirmation} />
      <Route path='expo-about' component={ExpoAbout} />
      <Route path='expo-order-details' component={ExpoOrderDetails} />
      <Route path="expo-order-confirmed-page" component={ExpoOrderConfirmed} />
      <Route path="expo-order-not-taken-page" component={ExpoOrderNotTaken} />
      <Route path="/expo-cancel-order/:orderNumber/:deliveryTime" component={ExpoCancelOrder}/>
      <Route path="/order-details" component={OrderDetails} />
      <Route path="/order-track" component={OrderTrack} />
      <Route path="/order-track-complete" component={OrderTrackComplete} />
      <Route path="/order-history" component={OrderHistory} />
      <Route path="login" component={Login} />
      <Route path="payment" component={Payment} />
      <Route path="expo-payment" component={ExpoPayment} />
    </Route>

    <Route path="/piccniccer-deliveries" component={PiccniccerDeliveries} />
    <Route path="/piccniccer-orders" component={PiccniccerOrders} />

    <Route path="/retailer-orders" component={RetailerOrders} />

  </Router>
),rootElement);
