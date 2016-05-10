var request = require('request');

var base_url = "http://localhost:3000";

describe("Hello World Server", function() {
    describe("Get /", function() {
        it("returns status code 200", function(done) {
            request.get(base_url, function(error, response, body) {
                expect(response.statusCode).toBe(200);
                done();
            });
        });

        it("returns Hello World array", function(done) {
          request.get(base_url + "?number=3", function(error, response, body) {
            expect(body).toEqual(JSON.stringify(["Hello World", "Hello World", "Hello World"]));
            done();
          });
        });
    });
});
