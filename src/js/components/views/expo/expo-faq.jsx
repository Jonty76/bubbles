import React from 'react';
import Header from '../../header.jsx';
import { Link } from 'react-router';

var ExpoFaq = React.createClass({

  componentDidMount: function() {
    $(document).ready(function(){
      $('.collapsible').collapsible({
        accordion : false
      });
    });

    $('#mail-gun-trigger').click(function(){
      $.post("/mail-test", function(data, status){

        console.log("data", data, "status", status)
      });
    })
  },


  render: function() {
    var burgerMenuOptions = ["Logout+/login", "FAQ+/expo-faq"]

    return (
      <div>
        <Header headerTheme={"whiteNav"} text={"Piccnicc Questions"} iconRight={"menu"} iconLeft={"arrow_back"} burgerMenuOptions={burgerMenuOptions}/>
        <div className="left-align desktop-container">
          <div className="content-container margin-all">
              <div>
                <button id="mail-gun-trigger">Test button</button>
              </div>
              <div>

                 <ul className="collapsible" data-collapsible="expandable">
                  <li>
                    <div className="collapsible-header faq-header">
                      <p><span className="faq-number">1.</span> Where is the Piccnicc service available?</p>
                    </div>
                    <div className="collapsible-body faq-body">
                        <p>Piccnicc is a new online food ordering and delivery service for people on the move, and we are trialling our new service at your exhibition.</p>
                        <br></br>
                        <p>In future we hope to be able to deliver you hampers of happiness wherever you are on the move. If you have any ideas for other exhibitions or locations where you would like to be able to use our service, please email <a href="mailto:jonny@piccnicc.com"> jonny@piccnicc.com </a> and we will do our best to be there!</p>
                    </div>
                  </li>
                  <li>
                    <div className="collapsible-header faq-header">
                      <p><span className="faq-number">2.</span> When can I use the service?</p>
                    </div>
                    <div className="collapsible-body faq-body">
                      <p>Piccnicc will operate throughout each day of the exhibition / between the hours of 11 and 3. All you need to do is choose your items, specify a delivery time and we’ll deliver them to you.</p>
                    </div>
                  </li>
                  <li>
                    <div className="collapsible-header faq-header">
                      <p><span className="faq-number">3.</span> Do you charge the same price as the restaurant?</p>
                    </div>
                    <div className="collapsible-body faq-body">
                        <p>Yes. We don’t apply any premium to the restaurant’s menu price. </p>
                        <br></br>
                        <p>If the restaurant is running a special promotion, you will only get the benefit of that if it is posted on their menus ahead of the event. This is because we upload the menu details including prices in advance
                          of the event based on the restaurant’s menu information at that time. We’re good, but we’re not mind-readers!</p>
                  </div>
                  </li>
                  <li>
                    <div className="collapsible-header faq-header">
                      <p><span className="faq-number">4.</span> Which restaurants do you deliver for?</p>
                    </div>
                    <div className="collapsible-body faq-body">
                      <p>As an independent marketplace, we offer menus from a selection of restaurants which we believe will give you a good range of options. There are no set criteria about which restaurants we select – though we hope you like the choice we’re providing, as well as the convenience.</p>
                      <br></br>
                      <p>If there’s a restaurant you’d like us to add for whatever reason, please send us <a href="mailto:jonny@piccnicc.com">feedback</a> with your contact number and the name of the restaurant. We can’t promise anything, but we’re happy to consider any suggestion that will improve our service.</p>
                    </div>
                  </li>
                  <li>
                    <div className="collapsible-header faq-header">
                      <p><span className="faq-number">5.</span> If I order "hot" food, will it still be hot when you deliver?</p>
                    </div>
                    <div className="collapsible-body faq-body">
                      <p>We don't use any special heat retentive packaging for our deliveries so it is inevitable some heat will be lost. For that reason we only offer to deliver "hot" food that we think still tastes ok not-quite-hot-anymore.</p>
                    </div>
                  </li>
                  <li>
                    <div className="collapsible-header faq-header">
                      <p><span className="faq-number">6.</span>How do I receive my order? </p>
                    </div>
                    <div className="collapsible-body faq-body">
                      <p>Exhibitors – enter your stand number and company name when ordering, and we’ll deliver your Hamper to you at the requested time at your exhibition stand. So no more risk of missing a sales opportunity just because you got peckish!</p>
                        <br></br>
                      <p>Non-exhibitors – to keep things simple, we’ll deliver your Hamper to you at the requested time at the main entrance to the exhibition hall.</p>
                    </div>
                  </li>

                  <li>
                    <div className="collapsible-header faq-header">
                      <p><span className="faq-number">7.</span> What happens if I can’t find the Piccniccer with my order – or they can’t find me?</p>
                    </div>
                    <div className="collapsible-body faq-body">
                      <p>If for any reason we can’t find one another, your Piccniccer will give you a call on the mobile number provided when you booked, no more than 5 minutes after the requested delivery time.</p>
                        <br></br>
                      <p>If that doesn’t work, your Hamper will be left for you at your exhibition stand (if you have one and provided the stand number with your booking) – or otherwise, with the event organizers / information desk.</p>
                    </div>
                  </li>

                  <li>
                    <div className="collapsible-header faq-header">
                      <p><span className="faq-number">8.</span> Can I track my order?</p>
                    </div>
                    <div className="collapsible-body faq-body">
                      <p>Due to the inaccuracy of standard mapping technology for on-foot deliveries, and the cost of installing suitably accurate blue-tooth or comparable technology, we do not currently provide “on the map” tracking for your order.</p>
                        <br></br>
                      <p>However, you will receive a text message when your Piccniccer arrives at the restaurant to collect your order, typically around 5-10 minutes before your requested delivery time.</p>
                    </div>
                  </li>

                  <li>
                    <div className="collapsible-header faq-header">
                      <p><span className="faq-number">9.</span> Can I collect my Piccnicc order from the restaurant?</p>
                    </div>
                    <div className="collapsible-body faq-body">
                      <p>No. Piccnicc is an ordering and delivery service, so we don’t offer an order only option.</p>
                        <br></br>
                      <p>If you want to order in advance to collect from the restaurant, please check the restaurant’s website and follow their ordering process.</p>
                    </div>
                  </li>

                  <li>
                    <div className="collapsible-header faq-header">
                      <p><span className="faq-number">10.</span> Why is there no delivery charge? </p>
                    </div>
                    <div className="collapsible-body faq-body">
                      <p>We’d rather let you decide what the service is worth. </p>
                        <br></br>
                      <p>To keep things simple, you just need to select one of the options presented: £0, £1 or £2.</p>
                    </div>
                  </li>

                  <li>
                    <div className="collapsible-header faq-header">
                      <p><span className="faq-number">11.</span> How do I leave a tip?</p>
                    </div>
                    <div className="collapsible-body faq-body">
                      <p>We don’t take tips through our app  and our Piccniccers do not expect tips. However, if you want to give a tip, please give the Piccniccer your tip in change when they deliver your Hamper to you – they’ll get to keep whatever you give them.</p>
                    </div>
                  </li>

                  <li>
                    <div className="collapsible-header faq-header">
                      <p><span className="faq-number">12.</span> Will I get a receipt?</p>
                    </div>
                    <div className="collapsible-body faq-body">
                      <p>Yes. Your receipt will be emailed automatically to the address you provide when booking.</p>
                    </div>
                  </li>

                  <li>
                    <div className="collapsible-header faq-header">
                      <p><span className="faq-number">13.</span> How do I change or cancel my order?</p>
                    </div>
                    <div className="collapsible-body faq-body">
                      <p>To cancel your order, select the CANCEL button on the email we sent you confirming your order. Your order will be refunded, though it may take a few days for the refund to show up on your account.</p>
                        <br></br>
                      <p>To change your order, you need to cancel the original order (as above), then place a new order. We’re developing a slicker way of doing this in-app, but for now we hope you’re ok with cancelling and making a new order.</p>
                        <br></br>
                      <p>Please note any cancellations must be made at least 45 minutes before the requested delivery time, or the order can not be refunded.</p>
                    </div>
                  </li>

                  <li>
                    <div className="collapsible-header faq-header">
                      <p><span className="faq-number">13.</span> How do I provide feedback?</p>
                    </div>
                    <div className="collapsible-body faq-body">
                      <p> Please send an email to <a href="mailto:jonny@piccnicc.com">jonny@piccnicc.com</a>. Jonny will review your email and get back to you accordingly.</p>
                    </div>
                  </li>

                  <li>
                    <div className="collapsible-header faq-header">
                      <p><span className="faq-number">14.</span>What if my question isn’t covered by the list above?</p>
                    </div>
                    <div className="collapsible-body faq-body">
                      <p>Please send us an <a href="mailto:jonny@piccnicc.com">email</a> and we’ll be happy to help.</p>
                    </div>
                  </li>

                </ul>
              </div>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = ExpoFaq;
