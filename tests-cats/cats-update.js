var dat = require('dat');

var db = dat('./dat-cats', ready); // dat([path], [options], [onReady])

function ready(err) {
    if (err) return console.error('ERROR: Could not load dat.', err);
    
    db.get('Bob', gotBob);
};

function gotBob(err, bob) {
    if (err) return console.error('ERROR: Could not get Bob', err);
    
    bob.age = 4;
    db.put(bob, done);
};

function done(err, row) {
    if (err) return console.error('ERROR: Could not update entry.', err);
    console.log('Updated entry!', row);
};
