var fs = require('fs');
var dat = require('dat');
var db = dat('./dat-cats', ready);

function ready(err) {
    if (err) return console.error(err);
    
    db.get('Bob', {version: 1}, function(err, bob) {
        if (err) return console.error('ERROR: Could not get version', err);
        
        console.log(bob);
    });
};

