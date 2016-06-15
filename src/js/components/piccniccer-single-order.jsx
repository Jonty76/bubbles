import React from "react";

let PiccniccerSingleOrder = React.createClass({

  componentDidMount: function (){
    var imageOrPointClass;
    document.getElementById(this.props.orderNumber).classList.add(this.props.done)

    if (this.props.imageOrPoint === "N1" || this.props.imageOrPoint === "N2") {
      var imageOrPoint = document.getElementsByClassName("imageOrPoint");
      for (var i = 0; i < imageOrPoint.length; i++) {
        imageOrPoint[i].classList.add("piccniccer-text")
      }
    }
  },

  render: function () {
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
            <div className="col s3 center-align imageOrPoint">
              {this.props.imageOrPoint}
            </div>
            <div id={this.props.orderNumber} className="col s2 right-align done">
              <i className="material-icons icon-margin">done</i>
            </div>
          </div>
        </div>
        <div className="divider"></div>
      </div>
    )
  }
})

module.exports = PiccniccerSingleOrder;
