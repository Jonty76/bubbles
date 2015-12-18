var test = require('tape');
var ReactTestUtils = require('react-addons-test-utils');
var React = require('react');

var shallowRenderer = ReactTestUtils.createRenderer();

var Selector = require('../src/js/components/views/select-airport.jsx').Components.Selector;

shallowRenderer.render(<Selector />);
var appRender = shallowRenderer.getRenderOutput();

test('Testing dropdown menu in select-airport.jsx', t => {
  var options = appRender.props.options;
  console.log("!!!!", options);
  console.log("!!!!", appRender.props);
  t.equal(options.length, 3, 'Two options in Selector');
  t.equal(options[2].label, "Gatwick Airport - LGW", 'Gatwick is third option');
  t.end();
});
