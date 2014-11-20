var dat = require('dat');

var db = dat('./dat-cats', ready); // dat([path], [options], [onReady])

function ready(err) {
    if (err) return console.error('ERROR: Could not load dat.', err);
    
};

function done(err, row) {
    if (err) return console.error('ERROR: Could not store entry.', err);
    console.log('Stored entry!', row);
};
