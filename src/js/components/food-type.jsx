import React from 'react';
import { FoodItem } from './food-item.jsx';

var Title = React.createClass({render: function() {
    return (
      <div>
        <h3 className="food-title">{this.props.title}</h3>
      </div>
    )
  }
});

var FoodItems = React.createClass({

  componentDidMount: function(){
    if(this.props.page === "order-details"){
      var classname = document.getElementsByClassName("list-group-item");
      for (var i = 0; i < classname.length; i++) {
        classname[i].style.height = "8em"
      }
    }
  },

  render: function() {
    return (
      <div>
        {this.props.items.map(function(item) {
            return (
              <div className='list-group-item pull-out'>
                <FoodItem
                  {...item}
                  basketContent={this.props.basketContent}
                  actions={this.props.actions}
                  inCheckout={this.props.inCheckout}
                  page={this.props.page}
                  />
              </div>
            );
          }.bind(this))}
      </div>
    );
  }
});

var FoodType = React.createClass({render: function() {
    return (
      <div>
        <Title title={this.props.name}/>
        <FoodItems items={this.props.items} actions={this.props.actions} inCheckout={this.props.inCheckout} page={this.props.page} basketContent={this.props.basketContent}/>
      </div>
    );
  }
});

module.exports = {
  FoodType,
  Components: {
    FoodItems,
    Title
  }
}
