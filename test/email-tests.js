var test   = require('tape');
var start = require('../lib/start.js');
var server = require("../lib/index.js");
var sendEmail = require("../lib/mail-gun.js");

var payload = {
  customerName: 'Test UserName',
  email: 'jonny@piccnicc.com',
  phoneNumber: '79521267321',
  company: 'Fake company',
  total: '6400',
  tip: '100',
  orderNumber: '14678013129742600',
  deliveryPoint: 'A45',
  deliveryTime: '1474428840000',
  expoCenter: 'Earls Court',
  expoName: 'Tech Conf',
  order: '[{"name":"Grain Store","description":"Grain Store is an innovative and sustainable restaurant and bar by celebrated chef Bruno Loubet, drinks pioneer Tony Conigliaro and the Zetter Group. Grain Store was awarded Menu of the Year at the Cateys in 2014.","items":[{"id":18,"name":"A Bowl of Superfood","description":"Quinoa, Beluga lentils, avocado, baby spinach, raw apple, pumpkin seeds, crumbled goat\'s feta","foodType":"Salads","restaurant":"Grain Store","price":"1200","quantityOrdered":2},{"id":19,"name":"Wild Mushroom and Truffle Burger","description":"Chicory, apple and hazelnut salad, milk bun","foodType":"Homemade Burgers","restaurant":"Grain Store","price":"1300","quantityOrdered":3}]}]',
  payment_method_nonce: 'fake-valid-nonce'
};

test("test first email to Jonny with order details send", function(t) {
  sendEmail(payload, "piccniccReciept", function(error){
    var actual = typeof error;
    var expected = "undefined";
    t.equal(actual, expected, "First email to Jonny should have been sent");
    t.end()
  })
});

test("test second email to Jonny with payment processed confirmation sends", function(t) {
  sendEmail(payload, "piccniccProccessedPayment", function(error){
    var actual = typeof error;
    var expected = "undefined";
    t.equal(actual, expected, "Second email to Jonny should have been sent");
    t.end();
  });
});

test("test order details email is sent to user", function(t) {
  sendEmail(payload, "userReciept", function(error){
    var actual = typeof error;
    var expected = "undefined";
    t.equal(actual, expected, "Order details email to user should have been sent");
    t.end();
  });
});

test("test cancel order email is sent to", function(t) {
  var cancelObj = {
    customerEmail: "jonny@piccnicc.com",
    orderNumber: "456777777test"
  }
  sendEmail(cancelObj, "piccniccCancelledOrder", function(error){
    var actual = typeof error;
    var expected = "undefined";
    t.equal(actual, expected, "Cancel email should have been sent");
    t.end();
  });
});
