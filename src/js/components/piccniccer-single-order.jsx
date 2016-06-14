import React from "react";

let PiccniccerSingleOrder = React.createClass({
  render: function () {
    var doneClassNames = this.props.done + " material-icons icon-margin"
    return (
      <div>
        <div className="section restaurant-option">
          <div className="row no-margin">
            <div className="col s1 left-align no-padding">
              {this.props.isError}
            </div>
            <div className="col s3">
              <p className="piccniccer-text"><strong>{this.props.orderNumber}</strong></p>
            </div>
            <div className="col s3">
              <p className="piccniccer-text">{this.props.name}</p>
            </div>
            <div className="col s3 center-align">
              {this.props.imageOrPoint}
            </div>
            <div id={this.props.orderNumber} className="col s2 right-align done">
              <i className={doneClassNames}>done</i>
            </div>
          </div>
        </div>
        <div className="divider"></div>
      </div>
    )
  }
})

module.exports = PiccniccerSingleOrder;
