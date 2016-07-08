var test   = require('tape');
var start = require('../lib/start.js');
var server = require("../lib/index.js");

// test("simple server running", function(t) {
//     var options = {
//       method: "GET",
//       url: "/"
//     };
//     server.inject(options, function(response) {
//       t.equal(response.statusCode, 200, "200 status code returned");
//       t.end()
//     });
// });
//
//
// test('Does successful payment return successful page', function(t){
//   var options = {
//     method: "POST",
//     url: "/process-payment",
//     payload: {
//         firstName: 'Katerina',
//         lastName: 'Pascoulis',
//         email: 'kat_pas@hotmail.co.uk',
//         phoneNumber: '79527958721',
//         company: 'FAC',
//         total: '2600',
//         orderNumber: '14678013129742600',
//         deliveryPoint: 'Main Entrance',
//         deliveryTime: '1474428840000',
//         order: '[{"name":"Grain Store","description":"Grain Store is an innovative and sustainable restaurant and bar by celebrated chef Bruno Loubet, drinks pioneer Tony Conigliaro and the Zetter Group. Grain Store was awarded Menu of the Year at the Cateys in 2014.","items":[{"id":18,"name":"A Bowl of Superfood","description":"Quinoa, Beluga lentils, avocado, baby spinach, raw apple, pumpkin seeds, crumbled goat\'s feta","foodType":"Salads","restaurant":"Grain Store","price":"1200","quantityOrdered":1},{"id":19,"name":"Wild Mushroom and Truffle Burger","description":"Chicory, apple and hazelnut salad, milk bun","foodType":"Homemade Burgers","restaurant":"Grain Store","price":"1300","quantityOrdered":1}]}]',
//         payment_method_nonce: 'fake-valid-nonce'
//       }
//     }
//   server.inject(options, function(response) {
//     t.equal(response.headers.location, "/#/expo-order-confirmed-page", "Payment should be returned successful")
//     t.end()
//   });
// });
//
// test('Does failed payment return failed page', function(t){
//   var options = {
//     method: "POST",
//     url: "/process-payment",
//     payload: {
//       firstName: 'TestFirstName',
//       lastName: 'TestSecondName',
//       email: 'email@email.com',
//       phoneNumber: '07111111111',
//       company: 'Failed Payment Co',
//       total: '300000',
//       orderNumber: '14676382555371390',
//       payment_method_nonce: 'fake-processor-declined-visa-nonce'
//     }
//   }
//   server.inject(options, function(response) {
//     t.equal(response.headers.location, "/#/expo-order-failed", "Payment should be returned failed")
//     server.stop(t.end);
//   });
// });

// test.only('Does failed first email to Jonny return order not processed page', function(t){
//   var options = {
//     method: "POST",
//     url: "/process-payment",
//     payload: {
//         firstName: 'Ruth',
//         lastName: 'Uwemedimo',
//         email: 'emailtoruth@virginmedia.com',
//         phoneNumber: '79527958721',
//         company: 'FAC',
//         total: '2600',
//         orderNumber: '14678013129742600',
//         deliveryPoint: 'Main Entrance',
//         deliveryTime: '1474428840000',
//         order: '[{"name":"Grain Store","description":"Grain Store is an innovative and sustainable restaurant and bar by celebrated chef Bruno Loubet, drinks pioneer Tony Conigliaro and the Zetter Group. Grain Store was awarded Menu of the Year at the Cateys in 2014.","items":[{"id":18,"name":"A Bowl of Superfood","description":"Quinoa, Beluga lentils, avocado, baby spinach, raw apple, pumpkin seeds, crumbled goat\'s feta","foodType":"Salads","restaurant":"Grain Store","price":"1200","quantityOrdered":1},{"id":19,"name":"Wild Mushroom and Truffle Burger","description":"Chicory, apple and hazelnut salad, milk bun","foodType":"Homemade Burgers","restaurant":"Grain Store","price":"1300","quantityOrdered":1}]}]',
//         payment_method_nonce: 'fake-valid-nonce'
//       }
//     }
//   server.inject(options, function(response) {
//     t.equal(response.headers.location, "/#/expo-order-not-taken-page", "Order not taken page should be returned")
//     t.end()
//   });
// });
