import React from 'react';
import { Link, hashHistory } from 'react-router';

var Header = React.createClass({
  componentDidMount: function (){
    $(document).ready(function(){
      $("#button-collapse").sideNav({
        menuWidth: 180,
        edge: 'right',
        closeOnClick: true
      });
    })

    if(this.props.iconLeft === "error_outline") {
      document.getElementById('icon-left').classList.add("modal-trigger")

    } else if (this.props.iconLeft === "arrow_back") {
      document.getElementById('icon-left').addEventListener('click', function(){
        hashHistory.goBack();
      })
    }

    if(this.props.headerTheme === "redNav") {
      document.getElementById('header').classList.add("red-nav")
    } else {
      document.getElementById('header').classList.add("white-nav")
    }
  },


  render: function() {
    return (
      <div className="navbar-fixed">
        <nav className="nav-class">
          <div id="header" className="header nav-wrapper">
            <p className="brand-logo center" id="brand-logo">{this.props.text}</p>
              <ul data-activates="mobile-demo" id="button-collapse" className="button-collapse right"><i id="icon-right" className="material-icons icon-right">menu</i></ul>
                <ul className="side-nav fixed" id="mobile-demo">
                  <li>Hidden</li>
                  <li><Link className="burger-menu-item right" to="/about">About</Link></li>
                  <li><Link className="burger-menu-item right" to="/order-history">Order History</Link></li>
                  <li><Link className="burger-menu-item right" to='/login'>Logout</Link></li>
                </ul>
                <ul className="left"><i id="icon-left" className="material-icons icon-left">{this.props.iconLeft}</i></ul>
          </div>
        </nav>
      </div>
    );
  }
});

module.exports = Header;
