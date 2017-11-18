const mocha = require('mocha');
const assert = require('assert');
const PersonChar = require('../models/personchar');



// Mieu ta lai qua trinh kiem tra
describe('Cap nhat ban ghi (records)', function() {

    // Saving record
    var character;
    beforeEach(function(done) {
        
        character = new PersonChar({
            name: 'Toan',
            height: 168,
        });

        character.save().then(function() {
            done();
        });
    });

    it('Cap nhat mot ban ghi tu csdl', function(done) {
        PersonChar.findOneAndUpdate({name: 'Toan'}, {name: 'Sky Albert' }).then(function() {

            PersonChar.findOne({_id: character._id}).then(function(result) {
                assert(result.name === 'Sky Albert');
                done();
            })
        })
    });

    it('Tang chieu cao len 2', function(done) {
        PersonChar.update({}, { $inc: { height: 2} }).then(function() {
            PersonChar.findOne({name: 'Toan'}).then(function(record) {
                assert(record.height === 170);
                done();
            })
        })
    });


    
});