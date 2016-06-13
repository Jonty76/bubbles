import React from 'react';
import { Link, hashHistory } from 'react-router';

var RedHeader = React.createClass({
  componentDidMount: function (){
    document.getElementById('back-button').addEventListener('click', function(){
      hashHistory.goBack();
    })
  },

  render: function() {
    return (
      <div className="navbar-fixed">
        <nav>
          <div className="header nav-wrapper red-nav">
            <p className="brand-logo center white-text" id="brand-logo">{this.props.text}</p>
              <ul>
                <li className="right"><i className="done-icon material-icons white-text">{this.props.iconRight}</i></li>
                <li className="left"><i id="back-button" className="settings-icon material-icons white-text">{this.props.iconLeft}</i></li>
              </ul>
          </div>
        </nav>
      </div>
    );
  }
});

module.exports = RedHeader;
