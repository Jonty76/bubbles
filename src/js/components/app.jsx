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

    // const { children, ...props } = this.props woahaa
    // const { previousPathname } = this.state

    return (
      <ReactCSSTransitionGroup {...props}>
        <StaticContainer
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
//    transitionAppear={true} transitionAppearTimeout={1000}
    return (
        <div>
          <Header />
          <RouteCSSTransitionGroup
            component="div"
            transitionName="example"
            transitionEnterTimeout={2000}
            transitionLeaveTimeout={2000}>

              {child}
          </RouteCSSTransitionGroup>
        </div>
         );
  }
});
