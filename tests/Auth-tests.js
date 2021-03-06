var assert = require('assert');
var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../index.js');
var should = chai.should();
chai.use(chaiHttp);
require('dotenv/config');

process.env['NODE_ENV'] = "Production"

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
	describe('Endpoint /api', function(){
		it('returns correct status', function(done) {
		  chai.request(server)
		    .get('/api')
		    .end(function(err, res){
		      res.should.have.status(200);
		      res.should.be.an('object');
		      done();
		    });
		});

		it('welcome message', function(done) {
		  chai.request(server)
		    .get('/api')
		    .end(function(err, res){
		      res.body.should.have.property('message');
		      res.body.message.should.equal("Welcome to the course-prof API");
		      done();
		    });
		});
	});

	describe('Test intrusion: access protected endpoints with no login', function(){
		// try accessing api endpoints without logging in
		it('/api/course returns unauthorized', function(done) {
		  chai.request(server)
		    .get('/api/course')
		    .end(function(err, res){
		      res.should.have.status(401);
		      done();
		    });
    });
    it('/api/prof returns unauthorized', function(done) {
		  chai.request(server)
		    .get('/api/prof')
		    .end(function(err, res){
		      res.should.have.status(401);
		      done();
		    });
    });
    it('/api/review returns unauthorized', function(done) {
		  chai.request(server)
		    .get('/api/review')
		    .end(function(err, res){
		      res.should.have.status(401);
		      done();
		    });
		});
	});
});
