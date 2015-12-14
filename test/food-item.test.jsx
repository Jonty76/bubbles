import test from 'tape';
import ReactTestUtils from 'react-addons-test-utils';
import React from 'react';

let shallowRenderer = ReactTestUtils.createRenderer();

import { FoodItem } from '../src/js/components/food-item.jsx';

shallowRenderer.render(<FoodItem />);

let foodItemRender = shallowRenderer.getRenderOutput();

test('FoodItem exists', t => {
  t.ok(foodItemRender, 'foodItem render object exists');
  t.end();
});
