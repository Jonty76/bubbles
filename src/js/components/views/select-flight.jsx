import React from 'react';
import Formsy from 'formsy-react';
import { Select } from 'formsy-react-components';
import {Router, Route, Link} from 'react-router';

let Selector = React.createClass({
  render: function() {
    let airlineOptions = [
      {label: "British Airways"},
      {label: "Emirates"},
      {label: "Air Japan"},
      {label: "South African Airways"}
    ];

    return (
      <Select
        name="airlineSelector"
        options={airlineOptions}
      />
    );
  }
});

let Page = React.createClass({
  render:function(){
    return (
      <div>
        <Formsy.Form>
          <fieldset>
            <Selector />
          </fieldset>
        </Formsy.Form>
      </div>
    );
  }
});

module.exports = ({
  Page,
  Components:{
    Selector
  }
});
