import React from 'react';
import { Link, hashHistory } from 'react-router';

var BaseButton = React.createClass({

  render: function() {
    return (
      <div className="">
        <Link to={this.props.buttonLink}>
          <div className="waves-effect waves-light base-button btn-large">{this.props.buttonText}</div>
        </Link>
      </div>
    );
  }
});

module.exports = BaseButton;
