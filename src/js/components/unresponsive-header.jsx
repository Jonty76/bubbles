import React from 'react';
import { Link } from 'react-router';

var UnresponsiveHeader = React.createClass({

  componentDidMount: function (){
    $("#button-collapse").click(function(){
      $("#mobile-demo").css("display", "initial")
    })
    $(document).ready(function(){
      $("#button-collapse").sideNav({
        menuWidth: 220,
        edge: 'right',
        closeOnClick: true
      });
    })
  },

  activeMenu: function (){
    return (
      <div>
      <ul data-activates="mobile-demo" id="button-collapse" className="button-collapse right"><i className="material-icons icon-right">menu</i></ul>
      <ul className="side-nav fixed red-side-nav" id="mobile-demo" style={{display:"none", zIndex:"-1"}}>
        <li>Hidden</li>
        <li><Link className="right" to={"/expo-about"}>About</Link></li>
        <li><Link className="right" to={"/expo-faq"}>FAQ</Link></li>
      </ul>
      </div>
    )
  },

  inactiveMenu: function (){
    return (
      <i className="material-icons icon-right right" style={{fontSize:"2.7rem", cursor:"default"}}>menu</i>
    )
  },

  render: function (){
    var menu;
    if (this.props.active) {
      menu = this.activeMenu();
    } else {
      menu = this.inactiveMenu();
    }
    return (
      <div className="navbar-fixed">
        <nav className="nav-class">
          <div className="header nav-wrapper white-nav">
            <p className="left" id="brand-logo" style={{marginLeft:"1em"}}>Piccnicc</p>
            {menu}
          </div>
        </nav>
      </div>
    )
  }
});

module.exports = UnresponsiveHeader;
