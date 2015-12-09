var test = require('tape');
var ReactTestUtils = require('react-addons-test-utils');
var React = require('react');

var shallowRenderer = ReactTestUtils.createRenderer();

var Header = require('../src/js/components/header.jsx');

shallowRenderer.render(<Header />);
var headerRender = shallowRenderer.getRenderOutput();

test('Testing link to about in Header', t => {
  var link = headerRender.props.children[0];
  t.equal(link.props.to, '/about', 'Link to /about is first child of Header');
  t.end();
});
