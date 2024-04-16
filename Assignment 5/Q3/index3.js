
const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '/public/home.html'));
});

app.get('/about', function(req, res) {
    res.sendFile(path.join(__dirname, '/public/about.html'));
});

app.get('/img/favPhoto', function(req, res) {
    res.sendFile(path.join(__dirname, '/public/favphoto.jpg'));
});
app.get('/css/assign.css', function(req, res) {
    res.sendFile(path.join(__dirname, '/css/assign.css'));
});


app.use(function(req, res) {
    res.status(404)
    res.sendFile(path.join(__dirname, '/public/notfound.html'));
});

app.listen(port);
console.log('Server started at http://localhost:3000');