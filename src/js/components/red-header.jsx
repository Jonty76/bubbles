import React from 'react';
import { Link, hashHistory } from 'react-router';

var RedHeader = React.createClass({

  render: function() {
    return (
      <div className="navbar-fixed">
        <nav>
          <div className="header nav-wrapper red-nav">
            <p className="brand-logo center white-text" id="brand-logo">{this.props.text}</p>
              <ul>
                <li className="right"><i className="settings-icon material-icons white-text">{this.props.iconRight}</i></li>
                <li className="left"><i className="error-icon material-icons white-text">{this.props.iconLeft}</i></li>
              </ul>
          </div>
        </nav>
      </div>
    );
  }
});

module.exports = RedHeader;
