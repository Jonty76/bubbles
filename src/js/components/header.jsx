import React from 'react';
import { Link, hashHistory } from 'react-router';

var Header = React.createClass({
  componentDidMount: function (){
    console.log("header component props", this.props)
    if(this.props.iconLeft === "error_outline") {
      document.getElementById('icon-left').classList.add("modal-trigger")

    } else if (this.props.iconLeft === "arrow_back") {
      document.getElementById('icon-left').addEventListener('click', function(){
        hashHistory.goBack();
      })
    }

    if(this.props.headerTheme === "redNav") {
      console.log(this.props.headerTheme)
      document.getElementById('header').classList.add("red-nav")
    } else {
      console.log("white nav")
      document.getElementById('header').classList.add("white-nav")
    }
  },


  render: function() {
    return (
      <div className="navbar-fixed">
        <nav>
          <div id="header" className="header nav-wrapper">
            <p className="brand-logo center" id="brand-logo">{this.props.text}</p>
              <ul>
                <li className="left"><i id="icon-left" className="icon-left material-icons">{this.props.iconLeft}</i></li>
                <li className="right"><i id="icon-right" className="icon-right material-icons">{this.props.iconRight}</i></li>
              </ul>
          </div>
        </nav>
      </div>
    );
  }
});

module.exports = Header;
