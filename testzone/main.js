var fs = require('fs'),
    dat = require('dat'),
    db = dat(csvpipe),
    file = 'testfile.csv'; // name of csv file with dataset

function csvpipe(err, test) {
    console.log('test');
    if (err) return console.error('Error in csvpipe', err);
    var filedata = fs.createReadStream(file, {format: 'csv'});
    var writeStream = db.createWriteStream({format: 'csv'});
    filedata.pipe(writeStream);
    console.log('All entries stored!');
};
