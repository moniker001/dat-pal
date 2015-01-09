var fs = require('fs'),
    dat = require('dat'),
    parse = require('minimist'),
    db = dat(csvpipe);

var argOptions = {
    alias: {
        data: 'f'
    },
    "default": {
        data: 'test.csv'
    }
}

var argv = parse(process.argv.slice(1), argOptions);
var file = "./csvdata/" + argv.data;

function csvpipe(err, test) {
    if (err) return console.error('Error in csvpipe', err);
    var filedata = fs.createReadStream(file, { format: 'csv' });
    var writeStream = db.createWriteStream({ format: 'csv' });
    filedata.pipe(writeStream);
    console.log('All entries stored!');
};


