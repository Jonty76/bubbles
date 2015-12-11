import React from 'react';

var RemoveItem = React.createClass({
  removeItem: function() {
    this.props.actions.removeItem(this.props.details.id);
  },

  render: function() {
    return (
      <div>
        <button onClick={this.removeItem}>-</button>
      </div>
    );
  }
});

var AddItem = React.createClass({
  addItem: function() {
    this.props.actions.addItem(this.props.details.id);
  },

  render: function() {
    return (
      <div>
        <button onClick={this.addItem}>-</button>
      </div>
    );
  }
});

var NumberOrdered = React.createClass({
  render: function() {
    return (
      <div>
         <p>{this.props.numberOrdered+"x"}</p>
      </div>
    )
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
