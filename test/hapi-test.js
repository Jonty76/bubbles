var test   = require('tape');
var start = require('../lib/start.js');
var server = require("../lib/index.js"); // our index.js from above

test("simple server running", function(t) { // t
    var options = {
        method: "GET",
        url: "/"
    };
    // server.inject lets you similate an http request
    server.inject(options, function(response) {
        t.equal(response.statusCode, 200, "200 status code returned");  //  Expect http response status code to be 200 ("Ok")
        // setTimeout(function(){
          server.stop(t.end); // t.end() callback is required to end the test in tape
        // },2000);
    });

});

test("public served", function(t) { // t
    var options = {
        method: "GET",
        url: "/index.html"
    };
    // server.inject lets you similate an http request
    server.inject(options, function(response) {
        t.equal(response.statusCode, 200, "200 status code returned");  //  Expect http response status code to be 200 ("Ok")
        // setTimeout(function(){
          server.stop(t.end); // t.end() callback is required to end the test in tape
        // },200);
    });


});
