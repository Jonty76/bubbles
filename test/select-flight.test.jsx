var test = require('tape');
var ReactTestUtils = require('react-addons-test-utils');
var React = require('react');

var rendererCreator = ReactTestUtils.createRenderer;

var Selector = require('../src/js/components/views/select-flight.jsx').Components.Selector;
var FlightNumberSelector = require('../src/js/components/views/select-flight.jsx').Components.FlightNumberSelector;

var selectorShallowRenderer = rendererCreator();
var flightSelectorShallowRenderer = rendererCreator();

selectorShallowRenderer.render(<Selector />);
flightSelectorShallowRenderer.render(<FlightNumberSelector />);

var selectorRender = selectorShallowRenderer.getRenderOutput();
var flightSelectorRender = flightSelectorShallowRenderer.getRenderOutput();



test('Testing dropdown menus in select-flight.jsx', t => {
  var selectorRenderOptions = selectorRender.props.options;
  var flightSelectorRenderChildren = flightSelectorRender.props.children;
  t.equal(selectorRenderOptions.length, 5, 'Five options in Selector');
  t.equal(selectorRenderOptions[1].label, "British Airways", 'British Airways is second option');
  t.equal(flightSelectorRenderChildren, " ", 'Flight Selector Children empty on page load');
  t.end();
});
