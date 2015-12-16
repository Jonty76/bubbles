var test = require('tape');
var ReactTestUtils = require('react-addons-test-utils');
var React = require('react');

var shallowRenderer = ReactTestUtils.createRenderer();

var Selector = require('../src/js/components/views/select-airport.jsx').Components.Selector;

shallowRenderer.render(<Selector />);
var appRender = shallowRenderer.getRenderOutput();

test('Testing dropdown menu in select-airport.jsx', t => {
  var options = appRender.props.options;
  t.equal(options.length, 2, 'Two options in Selector');
  t.equal(options[1].label, "Gatwick", 'Gatwick is second option');
  t.end();
});
