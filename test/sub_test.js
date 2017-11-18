const assert = require('assert');
const mongoose = require('mongoose');
const Author = require('../models/author');

describe('Tim hieu ve record sub', function() {

    // Drop 
    beforeEach(function(done) {
        mongoose.connection.collections.authors.drop(function() {
            done();
        })
    })

    // Tao qua tinh kiem tra
    it('Tao ra mot tac gia voi cac quen sach', function(done) {

        var tacgia = new Author({
            name: 'Sky Albert',
            books: [{title: 'Xay dung ung dung bang Angular JS', numberOfPages: 20}],
        })

        tacgia.save().then(function() {

            Author.findOne({name: 'Sky Albert'}).then(function(record) {
                assert(record.books.length === 1);
                done();
            })
        })
    })

    it('Them quyen sach', function(done) {
        
        var tacgia = new Author({
            name: 'Sky Albert',
            books: [{title: 'Xay dung ung dung bang Angular JS', numberOfPages: 50}],
        })

        tacgia.save().then(function() {

            Author.findOne({name: 'Sky Albert'}).then(function(record) {
                // them mot quyen sach vao mang 
                record.books.push({title: 'Xay dung DOM JS', numberOfPages: 50});
                record.save().then(function() {
                    Author.findOne({name: 'Sky Albert'}).then(function(result) {
                        assert(result.books.length === 2 );
                        done();
                    })
                })
            })
        })
    })
})