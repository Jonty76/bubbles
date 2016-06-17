import React from 'react';
import { Link, hashHistory } from 'react-router';

var MapModal = React.createClass({

  matchTerminal: function() {
    var terminal = this.props.terminal
    if (terminal === "north") {
      return "https://cloud.githubusercontent.com/assets/9627463/16157776/fabdf74a-34b1-11e6-90cb-01627b05bffd.png"
    } else if (terminal === "south"){
      return "https://cloud.githubusercontent.com/assets/9627463/16157777/fabe7292-34b1-11e6-91fa-732656c75d0c.png"
    } else {
      console.log("None selected")
   }
  },

  render: function() {
    return (
      <div id="terminal-map" className="">
        <div className="row">
          <a href={this.matchTerminal()}>Pick up point</a>
        </div>
      </div>
    );
  }
});

module.exports = MapModal;
