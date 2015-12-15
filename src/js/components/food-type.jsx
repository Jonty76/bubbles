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
      <div>
        {this.props.items.map(function(item) {
            return (
              <li>
                <FoodItem
                  {...item}
                  actions={this.props.actions}
                  inCheckout={this.props.inCheckout}
                  />
              </li>
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
