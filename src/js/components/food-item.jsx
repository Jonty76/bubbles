import React from 'react';


var AddItem = React.createClass({
  addItem: function() {
    this.props.addItem(this.props.id);
  },

  render: function() {
    var buttonStyle = {
      position: 'relative',
      top: '0.35em',
      left: '-0.1em',
      fontSize: '1.4em',
    };
    var showButton = (
        <div style={buttonStyle} onClick={this.addItem}>
          <span className="glyphicon glyphicon-menu-up" aria-hidden="true"></span>
        </div>
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
    var buttonStyle = {
      position: 'relative',
      bottom: '0.15em',
      left: '-0.1em',
      fontSize: '1.4em',
    };
    var showButton = (
      <div style={buttonStyle} onClick={this.removeItem}>
        <span className="glyphicon glyphicon-menu-down" aria-hidden="true"></span>
      </div>
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
      <span className="glyphicon glyphicon-remove" onClick={this.clearQuantityOfItem}></span>
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
    var pounds = price => Math.floor(price/100);
    var pad = (price, digits) => price.length < digits ? pad('0' + price, digits) : price;
    var pence = price => pad((price - 100 * pounds(price)).toString(), 2);
    var formatPrice = price => '£' + pounds(price) + '.' + pence(price);

    return (
      <div>
        <span>
          {this.props.inCheckout ? formatPrice(this.props.subtotal) : formatPrice(this.props.price)}
        </span>
      </div>
    );
  }
});


var NumberOrdered = React.createClass({
   render: function() {
     var atLeastOne = (
        <span>{this.props.numberOrdered+"x"}</span>
      );
     var zero = (
       <div></div>
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

    var inlineStyle = {
      display: 'inline-block'
    };

    var buttonsStyle = {
      display: 'inline-block',
      height: '5em',
      width: '8%'
    };

    var contentStyle = {
      display: 'inline-block',
      width: '70%',
      position: 'absolute',
      top: '50%',
      transform: 'translateY(-50%)'
    };

    var priceStyle = {
      display: 'inline-block',
      position: 'absolute',
      top: '50%',
      left: '85%',
      transform: 'translateY(-50%)'
    };

    return (
      <div onClick={this.clickHandler}>
        <div style={buttonsStyle}>
          <AddItem
            addItem={this.props.actions.addItem}
            id={this.props.id}
            numberOrdered={this.props.quantityOrdered}
          />
          <NumberOrdered
            numberOrdered={this.props.quantityOrdered}
          />
          <RemoveItem
            removeItem={this.props.actions.removeItem}
            id={this.props.id}
            numberOrdered={this.props.quantityOrdered}
          />
        </div>
        <span style={contentStyle}> {this.props.name} </span>
        <div style={priceStyle} className='pull-right'>
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
