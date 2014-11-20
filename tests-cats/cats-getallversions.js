var fs = require('fs');
var dat = require('dat');
var db = dat('./dat-cats', ready);

function ready(err) {
    if (err) return console.error(err);
    
    db.versions('Bob', function(err, versions) {
        if (err) return console.error('ERROR: Could not get all versions', err);
        if (!versions) return console.log('No versions found');
        console.log(versions);
    });
};

