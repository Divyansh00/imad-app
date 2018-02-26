require('dotenv').config();

var http = require('http');
var Pool = require('pg').Pool;
var express = require('express');
var path = require('path');

var app = express();
app.use(express.bodyParser());
app.use(app.router);

var config = {
	//host: 'db.imad.hasura-app.io',
	//port: '5432',
	//user: 'divyanshchowdhary2016',
	//database: 'divyanshchowdhary2016',
	//password: process.env.DATABASE_PASSWORD
	
}

var pool = new Pool(config); //connect to the database

app.get('/',function(req,res){
	res.sendFile(path.join(__dirname,'ui','login.html'));
})

app.post('/logStat',function(req,res){
	var username = req.body.username;
	var password = req.body.password;
	res.send("FDD");

})

vaar port =8080;
app.listen(8080,function () {
	console.log('Listening on port');
})

