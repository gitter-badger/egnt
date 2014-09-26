// require
var express = require('express');
var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

// static files
app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/node_modules'));
app.use(express.static(__dirname + '/bower_components'));


app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

http.listen(3000, function(){
  console.log('listening on *:3000');
  console.log(__dirname);
});


// connection success
io.sockets.on('connection', function(socket) {
    console.log('client connected!');
    
    socket.on('send', function(message) {
    	console.log("Server: " + message);

    	if (message === "hallo") {
    		socket.emit('back', "Selber Hallo!");
    	};
    });
});
