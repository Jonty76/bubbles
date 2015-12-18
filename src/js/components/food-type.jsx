import React from 'react';
import { FoodItem } from './food-item.jsx';

var Title = React.createClass({render: function() {
    return (
      <div>
        <h2>{this.props.title}</h2>
      </div>
    )
  }
});

var FoodItems = React.createClass({render: function() {
    return (
      <div className='list-group'>
        {this.props.items.map(function(item) {
            return (
              <div className='list-group-item pull-out'>
                <FoodItem
                  {...item}
                  actions={this.props.actions}
                  inCheckout={this.props.inCheckout}
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
        <FoodItems items={this.props.items} actions={this.props.actions} inCheckout={this.props.inCheckout} />
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
