const http = require('http');
const express = require('express');
const app = express();
const mongoose = require('mongoose');

http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end("Hello world");
}).listen(8080); 

let uri = "mongodb://ronen:a123456@ds159489.mlab.com:59489/chat";



mongoose.connect(uri,{useNewUrlParser: true}).then(() => {
	app.get('/', (req, res) => {
		res.end(uri);
	})    
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log("server connected on port "+PORT);
})