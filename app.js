var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.send('Hello world! I\'m gary!');
});

app.listen(3000, function() {
    console.log('Example app listening on port 3000!');
});