var express = require('express');
app = express();

app.get('/', function (req, res) {
  res.send('Hello World!\n');
});
app.get('/mars', function (req, res) {
  res.send('Hello Mars!\n');
});
app.get('/possum', function (req, res) {
  res.send('No possum here, sorry! The possum is playing dead!\n');
});

app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});

