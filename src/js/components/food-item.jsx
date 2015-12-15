import React from 'react';

var RemoveItem = React.createClass({
  removeItem: function() {
    this.props.removeItem(this.props.id);
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
    console.log("woahaa!");
    this.props.addItem(this.props.id);
  },

  render: function() {
    var showButton = (
        <button onClick={this.addItem}>+</button>
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
  clickHandler: function(event) {
    event.preventDefault(); // stopPropiagation?!!
    this.props.actions.addItem(this.props.id);
  },

  render: function() {
    console.log("buzinga!");
    // console.log(this.props);
    return (
      <div onClick={this.clickHandler}>
        <AddItem addItem={this.props.actions.addItem} id={this.props.id} />
        <NumberOrdered numberOrdered={this.props.quantityOrdered} />
        <p> {this.props.name} </p>
        <RemoveItem removeItem={this.props.actions.removeItem} id={this.props.id} />
        <p> {this.props.price} </p>
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
