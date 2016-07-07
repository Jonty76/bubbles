import React from 'react';
import Header from '../../header.jsx';
import { Link } from 'react-router';

var ExpoCancelOrder = React.createClass({
  render: function() {
    var burgerMenuOptions = ["Logout+/login", "FAQ+/expo-faq"]
    console.log("this.props.params",this.props.params);

    return (
      <div>
        <Header headerTheme={"whiteNav"} text={"Piccnicc"} iconRight={"menu"} iconLeft={"arrow_back"} burgerMenuOptions={burgerMenuOptions}/>
        <h2>loading...</h2>
      </div>
    );
  }
});

module.exports = ExpoCancelOrder;
