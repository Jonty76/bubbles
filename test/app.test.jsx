var test = require('tape');
var ReactTestUtils = require('react-addons-test-utils');
var React = require('react');

var shallowRenderer = ReactTestUtils.createRenderer();

var App = require('../src/js/components/app.jsx');

shallowRenderer.render(<App />);
var appRender = shallowRenderer.getRenderOutput();

test('App exists', t => {
  t.ok(appRender, 'app render object exists');
  t.end();
});
