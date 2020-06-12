var assert = require('assert');
var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../index.js');
var should = chai.should();
chai.use(chaiHttp);
require('dotenv/config');

process.env['NODE_ENV'] = ""
console.log(process.env.NODE_ENV)
/// Testing if arithmetic is true. Spoiler alert: it is
describe('Basic Math', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      assert.equal([1, 2, 3].indexOf(4), -1);
    });
  });
  describe('Addition', function() {
    it('should return 3 when 1, 2 is added', function() {
      assert.equal(1 + 2, 3);
    });
  });
});

describe('Test API', function(){
	describe('Test intrusion: access protected endpoints with no login', function(){
		// try accessing api endpoints without logging in
		it('/api/course/add returns unauthorized', function(done) {
		  chai.request(server)
		    .post('/api/course/add',{})
		    .end(function(err, res){
		      res.should.have.status(401);
		      done();
		    });
    });
    it('/api/prof/add returns unauthorized', function(done) {
		  chai.request(server)
		    .post('/api/prof/add',{})
		    .end(function(err, res){
		      res.should.have.status(401);
		      done();
		    });
    });
    it('/api/review/add returns unauthorized', function(done) {
		  chai.request(server)
		    .post('/api/review/add',{})
		    .end(function(err, res){
		      res.should.have.status(401);
		      done();
		    });
		});
	});
});