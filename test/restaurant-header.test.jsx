import test from 'tape';
import ReactTestUtils from 'react-addons-test-utils';
import React from 'react';

let shallowRenderer = ReactTestUtils.createRenderer();

import { RestaurantHeader } from '../src/js/components/restaurant-header.jsx';

shallowRenderer.render(<RestaurantHeader />);

let restaurantHeaderRender = shallowRenderer.getRenderOutput();

test('RestaurantHeader exists', t => {
  t.ok(restaurantHeaderRender, 'restaurantHeader render object exists');
  t.end();
});
