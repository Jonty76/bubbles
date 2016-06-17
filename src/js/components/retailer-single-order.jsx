import React from "react";

let RetailerSingleOrder = React.createClass({

  componentDidMount: function() {

  },

  renderLineItem: function (details) {
    return details.map(function(lineItem){
      return (
        <div className="row">
          <div className="retailer-quantity col s2 m2 left-align"><span>{lineItem.quantity}</span></div>
          <div className="retailer-line-item col s4 m4"><span>{lineItem.itemDescription}</span></div>
          <div className="retailer-price col s1 m1 right-align"><span>{lineItem.price}</span></div>
        </div>
      )
    })
  },

  render: function () {
    return (
        <li>
          <div className="collapsible-header">
              <div className="row padding no-margin">
                <div className="col s1 m1 left-align">
                  <div className=""><i className="modal-trigger material-icons grey-text">error_outline</i></div>
                </div>
                <div className="col s2 m2 left-align">
                  <p>{this.props.time}</p>
                </div>
                <div className="col s2 m2">
                  <p>{this.props.orderNumber}</p>
                </div>
                <div className="col s3 m3">
                  <p>{this.props.name}</p>
                </div>
                <div className="col s2 m2 right-align">
                  <p>{this.props.items}</p>
                </div>
                <div className="col s2 m2">
                  <div className=""><i className="processed-icon material-icons">check_circle</i></div>
                </div>
              </div>
            </div>

          <div className="collapsible-body">
            <div className="retailer-order-details row no-margin padding">
              {this.renderLineItem(this.props.details)}
              <div className="row">
                <div className="retailer-price col offset-s4 offset-m4 s2 m2 right-align"><span><b>Total: </b></span></div>
                <div className="retailer-price col s1 m1 right-align"><span>{this.props.total}</span></div>
              </div>
            </div>
          </div>

        </li>
    )
  }
})


module.exports = RetailerSingleOrder;
