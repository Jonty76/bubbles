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
            <p className="brand-logo center" id="brand-logo">{this.props.text}</p>
              <ul>
                <li className="right"><i className="icon-right material-icons">menu</i></li>
                <li className="left"><i id="back-button" className="icon-left material-icons">arrow_back</i></li>
              </ul>
          </div>
        </nav>
      </div>
    );
  }
});

module.exports = Header;
