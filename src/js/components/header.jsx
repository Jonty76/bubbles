import React from 'react';
import { Link, hashHistory } from 'react-router';

var Header = React.createClass({

  componentDidMount: function (){
    document.getElementById('back-button').addEventListener('click', function(){
      hashHistory.goBack();
    })
  },

  render: function() {
    return (
      <div className="navbar-fixed">
        <nav>
          <div className="header nav-wrapper">
            <a href="#" className="brand-logo center" id="brand-logo">Piccnicc</a>
              <ul>
                <li className="right"><i className="menu-icon material-icons">menu</i></li>
                <li className="left"><i id="back-button" className="back-icon material-icons">arrow_back</i></li>
              </ul>
          </div>
        </nav>
      </div>
    );
  }
});

module.exports = Header;
