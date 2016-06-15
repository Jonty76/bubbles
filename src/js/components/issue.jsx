import React from 'react';
import { Link, hashHistory } from 'react-router';
import TextField from 'material-ui/TextField';

var Issue = React.createClass({
  render: function() {
    return (
      <div id="issue-modal" className="modal">
        <div className="row">
            <div className="center-align issue-modal-container">
              <p className="top-line">What type of issue is it?</p>

                <div className="row">
                  <div id="issue-list" className="collection center-align">
                    <p className="collection-item">Item Missing</p>
                    <p className="collection-item">Order not prepared</p>
                    <p className="collection-item">Piccniccer not ready</p>
                    <p href="#!" className="collection-item">Customer Complaint</p>
                  </div>
                </div>

                <div className="row">
                  <textarea className="issue-description" rows="4" cols="50" placeholder="Describe issue here">
                  </textarea>
                </div>



            </div>
        </div>
      </div>
    );
  }
});

module.exports = Issue;
