import test from 'tape';
import ReactTestUtils from 'react-addons-test-utils';
import React from 'react';

let shallowRenderer = ReactTestUtils.createRenderer();

import Menu from '../src/js/components/menu.jsx';

shallowRenderer.render(<Menu />);

let menuRender = shallowRenderer.getRenderOutput();

test('Menu exists', t => {
  t.ok(menuRender, 'menu render object exists');
  t.end();
});
