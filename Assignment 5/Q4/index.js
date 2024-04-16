
const express = require('express');
const path = require('path');
const bodyParser = require("body-parser");

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '/feedbackForm.html'));
  });

app.get('/css/assign.css', function(req, res) {
    res.sendFile(path.join(__dirname, '/css/assign.css'));
});

  app.post("/submit-feedback", (req, res) => {
    console.log(`Received Feedback: 
      First Name: ${req.body.name},
      Email Address: ${req.body.email},
      Phone Number: ${req.body.number}
    `);
    res.send("Thank you for your feedback!");
  });

app.listen(port);
console.log('Server started at http://localhost:3000');