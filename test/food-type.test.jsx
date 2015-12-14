import test from 'tape';
import ReactTestUtils from 'react-addons-test-utils';
import React from 'react';

let shallowRenderer = ReactTestUtils.createRenderer();

import { FoodType } from '../src/js/components/food-type.jsx';

shallowRenderer.render(<FoodType />);

let foodTypeRender = shallowRenderer.getRenderOutput();

test('FoodType exists', t => {
  t.ok(foodTypeRender, 'foodType render object exists');
  t.end();
});
