import React from 'react';
import { Link, hashHistory } from 'react-router';

var RedHeader = React.createClass({
  componentDidMount: function (){

    if(this.props.iconLeft === "error_outline") {
      document.getElementById('icon-left').classList.add("modal-trigger")

    } else if (this.props.iconLeft === "arrow_back") {
      document.getElementById('icon-left').addEventListener('click', function(){
        hashHistory.goBack();
      })
    } else {
      return 
    }
  },


  render: function() {
    return (
      <div className="navbar-fixed">
        <nav>
          <div className="header nav-wrapper red-nav">
            <p className="brand-logo center white-text" id="brand-logo">{this.props.text}</p>
              <ul>
                <li className="right"><i className="icon-right material-icons">{this.props.iconRight}</i></li>
                <li className="left"><i id="icon-left" className="icon-left material-icons">{this.props.iconLeft}</i></li>
              </ul>
          </div>
        </nav>
      </div>
    );
  }
});

module.exports = RedHeader;
