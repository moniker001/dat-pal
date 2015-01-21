//-----------------------------------------------------------------------------
// Host and port configuration
var host = '127.0.0.1'  // midway-login2 is 128.135.112.72
var port = 8000
//-----------------------------------------------------------------------------

var submitFunc = function () {
  var url = document.getElementById('url');
  var display = document.getElementById('display');
  display.innerHTML = url.value;
  if (url.value) {
      sendForm();
      msg.style.color = 'green';		
      msg.innerHTML = "Submitted!";
  } else {
      msg.style.color = 'red';
      msg.innerHTML = "Must enter url!";
  }
}

var clearFunc = function () {
  var url = document.getElementById('url');
  var display = document.getElementById('display');
  url.value = "";
  display.innerHTML = "";
  msg.innerHTML = "";
}

var sendForm = function () { // Send form data to server
    var formData = new FormData();
    var url = document.getElementById('data').value;
    formData.append('url', url);
    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'http://'+host+':'+port+'/dat/csv', true);
    xhr.onload = function(e) {
        if (this.status==200) {console.log('Form sent!')};
    };
    xhr.send(formData);
};

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
};

var argv = parse(process.argv.slice(1), argOptions);
var file = "../csvdata/" + argv.data;

var csvpipe = function (err, test) {
    if (err) return console.error('Error in csvpipe', err);
    var filedata = fs.createReadStream(file, { format: 'csv' });
    var writeStream = db.createWriteStream({ format: 'csv' });
    filedata.pipe(writeStream);
    console.log('All entries stored!');
};

