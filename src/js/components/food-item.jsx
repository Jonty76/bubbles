import React from 'react';

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

var RemoveItem = React.createClass({
  removeItem: function(event) {
    event.stopPropagation();
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

var ClearQuantityOfItem = React.createClass({
  clearQuantityOfItem: function(event) {
    event.stopPropagation();
    this.props.clearQuantityOfItem(this.props.id);
  },

  render: function() {
    var inCheckoutPage = (
      <button onClick={this.clearQuantityOfItem}>x</button>
    );
    var notInCheckoutPage = (
      <div></div>
    );
    return (
      <div>
        {this.props.inCheckout ? inCheckoutPage : notInCheckoutPage}
      </div>
    );
  }
});

var Price = React.createClass({

  render: function(){
    return (
      <div>
        <span>
          {this.props.inCheckout ? this.props.subtotal : this.props.price}
        </span>
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
    // event.preventDefault(); //
    event.stopPropagation();
    this.props.actions.addItem(this.props.id);
  },

  render: function() {


    return (
      <div onClick={this.clickHandler}>
        <AddItem
          addItem={this.props.actions.addItem}
          id={this.props.id}
          numberOrdered={this.props.quantityOrdered}
        />
        <NumberOrdered
          numberOrdered={this.props.quantityOrdered}
        />
        <p> {this.props.name} </p>
        <RemoveItem
          removeItem={this.props.actions.removeItem}
          id={this.props.id}
          numberOrdered={this.props.quantityOrdered}
        />
        <Price
          price={this.props.price}
          subtotal={this.props.quantityOrdered * this.props.price}
          inCheckout={this.props.inCheckout}
        />
        <ClearQuantityOfItem
          clearQuantityOfItem={this.props.actions.clearQuantityOfItem}
          inCheckout={this.props.inCheckout}
          id={this.props.id}
          numberOrdered={this.props.quantityOrdered}
        />
      </div>
    );

  }
});

module.exports = {
  FoodItem,
  Components: {
    AddItem,
    RemoveItem,
    NumberOrdered,
    ClearQuantityOfItem,
    Price
  }
}
