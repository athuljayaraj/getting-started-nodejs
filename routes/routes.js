var appRouter = function (app) {
  app.get("/", function(req, res) {
    res.status(200).send("Welcome to our restful API");
  });

  app.get("/read", function(req, res) {
  	var data = readCsv();
    res.status(200).send(data);
  });
}

module.exports = appRouter;

var csv = require('csv');
var filePath = '/home/athul/git/getting-started-nodejs/data/data.csv';

function readCsv() {
	var obj = csv();
	var MyData = [];

	obj.from.path(filePath).to.array(function (data) {
	    for (var index = 0; index < data.length; index++) {
	        MyData.push([data[index][0], data[index][1], data[index][2], data[index][3]]);
	    }
    console.log(MyData);
    return MyData;
	});

}

/*var filePath = '/home/athul/git/getting-started-nodejs/data/data.csv';

var csv = require('csv');
// loads the csv module referenced above.

var obj = csv();
// gets the csv module to access the required functionality

function MyCSV(Fone, Ftwo, Fthree, Ffour) {
    return [Fone,Ftwo,Fthree,Ffour];
}; 
// Define the MyCSV object with parameterized constructor, this will be used for storing the data read from the csv into an array of MyCSV. You will need to define each field as shown above.

var MyData = []; 
// MyData array will contain the data from the CSV file and it will be sent to the clients request over HTTP. 

function readCsv(resp) {
	obj.from.path(filePath).to.array(function (data) {
	    for (var index = 0; index < data.length; index++) {
	        MyData.push(new MyCSV(data[index][0], data[index][1], data[index][2], data[index][3]));
	    }
    console.log(MyData);
    
	});	
}

var express = require('express');
var app = express();
app.get('/readCsv', (req, res) => {
	readCsv(res);
	res.writeHead(200, { 'content-type': 'application/json' });
	res.end();
});

app.listen(8080);
// Tells the webserver to listen on port 8080(obviously this may be whatever port you want.)*/