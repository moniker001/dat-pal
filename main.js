var fs = require('fs');
var dat = require('dat');
var db = dat('./test', ready); // dat([path], [options], [onReady])

var file = 'cities.csv';
console.log("Hello World");

function ready(err) {

//    for () {
        db.put('test', done);
        db.get('test', function(err, test) {
            if (err) return console.error('Bob is not in this dat', err);
            
            var filedata = fs.createReadStream(file);
            var writeStream = db.createWriteStream('testdata', test, {format: 'csv'});
            
            filedata.pipe(writeStream);
        });

//    }
    
    console.log('All entries stored!');
};

function done(err, row) {
    if (err) return console.error('ERROR: Could not store entry.', err);
    console.log('Stored entry!', row);
};
