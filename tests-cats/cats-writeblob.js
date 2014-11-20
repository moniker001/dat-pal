var fs = require('fs');
var dat = require('dat');
var db = dat('./dat-cats', ready);

function ready(err) {
    if (err) return console.error(err);
    
    db.get('Bob', function(err, bob) {
        if (err) return console.error('Bob is not in this dat', err);
        
        var bobPicture = fs.createReadStream('./bob.png');
        var blobWriteStream = db.createBlobWriteStream('bob.png', bob, done);
        
        bobPicture.pipe(blobWriteStream);
    });
};

function done(err, row) {
    if (err) return console.error('ERROR: Could not store blob', err);
    
    console.log('Stored blob', row);
};
