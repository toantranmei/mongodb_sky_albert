const mongoose = require('mongoose');

// ES6 Promises
mongoose.Promise = global.Promise;


// Connect to mongodb
before(function(done) {
    mongoose.connect('mongodb://localhost/testdb');
    
    mongoose.connection.once('open', function() {
        console.log("Ket noi da duoc thuc hien!");
        done();
    }).on('error', function(error) {
        console.log('Ket noi bi loi, ', error );
    })
})


// Drop cac personcharacter collection truoc khi kiem tra va them
beforeEach(function(done) {
    // Drop collection
    mongoose.connection.collections.personchars.drop(function() {
        done();
    })
})


// SQL DB: Table, Row, Column, Joins, Primary key
// MongDB: Collection, Document, Field, Embeded Documents/linking, Primary key