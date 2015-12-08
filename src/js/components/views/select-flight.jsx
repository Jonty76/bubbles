import React from 'react';
import Formsy from 'formsy-react';
import { Select } from 'formsy-react-components';
import {Router, Route, Link} from 'react-router';
import Calendar from 'react-input-calendar';

let airlineSelectorClass = React.createClass({
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

let calendarSelectorClass = React.createClass({
  render: function (){
    return (
      <Calendar
        format = "DD/MM/YYYY"
        date="08-12-2015"
      />,
    document.body
    );
  }

});

let Page = React.createClass({
  render:function(){
    return (
      <div>
        <Formsy.Form>
          <fieldset>
            <airlineSelectorClass />
          </fieldset>
        </Formsy.Form>
        <calendarSelectorClass />
      </div>
    );
  }
});

module.exports = ({
  Page,
  Components:{
    airlineSelectorClass,
    calendarSelectorClass
  }
});
