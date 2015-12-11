import React from 'react';

var RemoveItem = React.createClass({
  removeItem: function() {
    this.props.removeItem(this.props.id);
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
    this.props.addItem(this.props.id);
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
        <AddItem addItem={this.props.actions.addItem} id={this.props.details.id} />
        <p> {this.props.details.displayName} </p>
        <RemoveItem removeItem={this.props.actions.removeItem} id={this.props.details.id} />
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
