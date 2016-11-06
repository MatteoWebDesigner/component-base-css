var express = require('express');
var ip = require('ip');
var open = require('open');
var app = express();
var port = '3000';

app.use(express.static(__dirname + '/build'));

app.get('*', function(req, res) {
    res.sendFile(__dirname + '/build/index.html');
});

app.listen(port, function() {
    console.log('App running on http://localhost:' + port);
    console.log('App running on http://' + ip.address() + ':' + port);
    open('http://localhost:3000');
})