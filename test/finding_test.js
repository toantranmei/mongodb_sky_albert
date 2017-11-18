const mocha = require('mocha');
const assert = require('assert');
const PersonChar = require('../models/personchar');



// Mieu ta lai qua trinh kiem tra
describe('Tim kiem ban ghi (records)', function() {

    // Saving record
    var character;
    beforeEach(function(done) {
        
        character = new PersonChar({
            name: 'Toan'
        });

        character.save().then(function() {
            done();
        });
    });

    // Find one
    it('tim mot ban ghi tu csdl', function(done) {
        PersonChar.findOne({ name: 'Toan'}).then(function(result) {
            assert(result.name === 'Toan');
            done();
        })
    });

    // Find one by ID
    it('tim mot ban ghi bang ID tu csdl', function(done) {
        PersonChar.findOne({_id: character._id}).then(function(dataresult) {
            assert(dataresult._id.toString() === character._id.toString());
            done();
        })
    });

    
});