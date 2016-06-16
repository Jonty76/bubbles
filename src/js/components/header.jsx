import React from 'react';
import { Link, hashHistory } from 'react-router';

var Header = React.createClass({
  componentDidMount: function (){

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
        <nav>
          <div id="header" className="header nav-wrapper">
            <p className="brand-logo center" id="brand-logo">{this.props.text}</p>
              <p data-activates="mobile-demo" className="button-collapse right"><i id="icon-right" className="material-icons icon-right">menu</i></p>
                <ul className="side-nav" id="mobile-demo">
                  <li><Link to="/about">About</Link></li>
                  <li><Link to="/order-history">Order History</Link></li>
                  <li><Link to='/login'>Logout</Link></li>
                </ul>
                <p className="left"><i id="icon-left" className="material-icons icon-left">{this.props.iconLeft}</i></p>
          </div>
        </nav>
      </div>
    );
  }
});

// <ul>
//   <li className="left"><i id="icon-left" className="icon-left material-icons">{this.props.iconLeft}</i></li>
//   <li className="right"><i id="icon-right" className="icon-right material-icons">{this.props.iconRight}</i></li>
// </ul>

module.exports = Header;
