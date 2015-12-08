import React from 'react';
import Formsy from 'formsy-react';
import { Select } from 'formsy-react-components';
let Selector = React.createClass({
 render: function() {
   let airportOptions = [
     {label : "Heathrow"},
     {label : "Gatwick"}
   ];
   return (
     <Select
       name="airportSelector"
       options={airportOptions}
     />
  );
 }
});

// import { Router, Route, Link } from 'react-router';

 let Page = React.createClass({
  render: function() {
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

module.exports = {
  Page,
  Components: {
    Selector
  }
}
