import React from 'react';
import { Router, Route, Link } from 'react-router';
import Header from './header.jsx';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import StaticContainer from 'react-static-container'
import { createHistory, useBasename } from 'history'



class RouteCSSTransitionGroup extends React.Component {

  constructor(props, context) {
    super(props, context)

    this.state = {
      previousPathname: null
    }
  }

  componentWillReceiveProps(nextProps, nextContext) {
    if (nextContext.location.pathname !== this.context.location.pathname) {
      this.setState({ previousPathname: this.context.location.pathname })
    }
  }

  render() {
    var children = this.props.children;
    var props = this.props;

    var previousPathname = this.state.previousPathname;
    var tranStyle = {
        marginTop: "-10em"
    }

    return (
      <ReactCSSTransitionGroup {...props}>
        <StaticContainer style={tranStyle}
          key={previousPathname || this.context.location.pathname}
          shouldUpdate={!previousPathname}
        >
          {children}
        </StaticContainer>
      </ReactCSSTransitionGroup>
    )
  }

  componentDidUpdate() {
    if (this.state.previousPathname) {
      this.setState({ previousPathname: null })
    }
  }
}


RouteCSSTransitionGroup.contextTypes = {
  location: React.PropTypes.object
}

module.exports = React.createClass({
  render: function() {
    var child = this.props.children;
    console.log("main.jsx", child);
    return (
      <div>
        <Header />
        <RouteCSSTransitionGroup
          component="div"
          transitionName="example"
          transitionEnterTimeout={200}
          transitionLeaveTimeout={200}>
            <div className='margin-main-content'>{this.props.children}</div>
        </RouteCSSTransitionGroup>
      </div>
   );
  }
  // {child}
});
