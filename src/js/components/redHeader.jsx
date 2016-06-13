import React from 'react';
import { Link, hashHistory } from 'react-router';

var Header = React.createClass({

  render: function() {
    return (
      <div className="navbar-fixed">
        <nav>
          <div className="header nav-wrapper red-nav">
            <p className="brand-logo center white-text" id="brand-logo">{this.props.text}</p>
              <ul>
                <li className="right"><i className="done-icon material-icons white-text">done</i></li>
                <li className="left"><i className="settings-icon material-icons white-text">settings</i></li>
              </ul>
          </div>
        </nav>
      </div>
    );
  }
});

module.exports = Header;
