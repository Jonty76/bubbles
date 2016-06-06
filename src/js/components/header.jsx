import React from 'react';
import { Link } from 'react-router';

var Header = React.createClass({
  render: function() {
    return (
      <div>
        <nav>
          <div className="header nav-wrapper">
            <a href="#" className="brand-logo center" id="brand-logo">Piccnicc</a>
              <ul>
                <li className="right"><i className="menu-icon material-icons">menu</i></li>
                <li className="left"><i className="account-icon material-icons">account_circle</i></li>
              </ul>
          </div>
        </nav>
      </div>
    );
  }
});

module.exports = Header;
