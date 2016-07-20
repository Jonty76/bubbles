import React from 'react';
import { Link, hashHistory } from 'react-router';

var BurgerMenuOptions = React.createClass({
  render: function (){
    if (this.props.burgerMenuOptions === ""){
      return (<div></div>)
    } else {
      return (
        <div>
          {this.props.burgerMenuOptions.map(function(elem) {
            var option = elem.split("+")[0]
            var link = elem.split("+")[1]
            return (
              <li><Link className="right" to={link}>{option}</Link></li>
            );
          })}
        </div>
      );
    }
  }
});

var Header = React.createClass({
  componentDidMount: function (){
    $(document).ready(function(){
      $("#button-collapse").sideNav({
        menuWidth: 220,
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
      document.getElementById('mobile-demo').classList.add("white-side-nav")
    } else {
      document.getElementById('header').classList.add("white-nav")
      document.getElementById('mobile-demo').classList.add("red-side-nav")
    }

    if (this.props.iconLeft === "Piccnicc") {
      document.getElementById("icon-left").innerHTML = '<p className="brand-logo center" id="brand-logo">Piccnicc</p>'
    }
  },


  render: function() {

    return (
      <div className="navbar-fixed">
        <nav className="nav-class">
          <div id="header" className="header nav-wrapper">
            <p className="brand-logo center" id="brand-logo">{this.props.text}</p>
              <ul data-activates="mobile-demo" id="button-collapse" className="button-collapse right"><i id="icon-right" className="material-icons icon-right">{this.props.iconRight}</i></ul>
                <ul className="side-nav fixed" id="mobile-demo">
                  <li>Hidden</li>
                  <BurgerMenuOptions burgerMenuOptions={this.props.burgerMenuOptions} />
                </ul>
                <ul className="left"><i id="icon-left" className="material-icons icon-left">{this.props.iconLeft}</i></ul>
          </div>
        </nav>
      </div>
    );
  }
});

module.exports = Header;
