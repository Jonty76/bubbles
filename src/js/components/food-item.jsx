import React from 'react';

var RemoveItem = React.createClass({
  removeItem: function() {
    this.props.actions.removeItem(this.props.details.id);
  },

  render: function() {
    var showButton = (
        <button onClick={this.removeItem}>-</button>
    );
    var hideButton = (
      <div></div>
    );
    return (
      <div>
      {this.props.numberOrdered > 0 ? showButton : hideButton}
      </div>
    );
  }
});

var AddItem = React.createClass({
  addItem: function() {
    this.props.actions.addItem(this.props.details.id);
  },

  render: function() {
    var showButton = (
        <button onClick={this.addItem}>-</button>
    );
    var hideButton = (
      <div></div>
    );
    return (
      <div>
      {this.props.numberOrdered > 0 ? showButton : hideButton}
      </div>
    );
  }
});

var NumberOrdered = React.createClass({
  render: function() {
    var atLeastOne = (
       <p>{this.props.numberOrdered+"x"}</p>
     );
    var zero = (
      <p></p>
    );
    return (
      <div>
      {this.props.numberOrdered > 0 ? atLeastOne : zero}
      </div>
    );
  }
});


var FoodItem = React.createClass({
  render: function() {
    return (
      <div>
        <AddItem addItem= {this.props.addItem} />
        <p> {this.props.details.displayName} </p>
        <RemoveItem removeItem={this.props.removeItem} />
        <p> {this.props.details.price} </p>
      </div>
    );
  }
});

module.exports = {
  FoodItem,
  Components: {
    AddItem,
    RemoveItem,
    NumberOrdered
  }
}
