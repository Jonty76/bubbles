import React from 'react';

var RemoveItem = React.createClass({
  removeItem: function() {
    this.props.removeItem(this.props.details.id);
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

var props = {
  actions: {
    addItem: function() {}
  },
  id: 3
}

var rItemProps = {
  removeItem: function() {}
}

var AddItem = React.createClass({
  addItem: function() {
    this.props.addItem(this.props.details.id);
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
        <AddItem addItem={this.props.actions.addItem} />
        <p> {this.props.details.displayName} </p>
        <RemoveItem removeItem={this.props.actions.removeItem} />
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
