var express = require('express');
var parser = require('body-parser');
var path = require('path');
var app = express();

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Originm X-Requested-With, Content-Type, Accept");
  next();
});

app.use(parser.urlencoded({extended: true}));



app.post('/', (req, res) => {
  var username = req.body.user;
  var password = req.body.pass; 
  var array = [{
    'jared':'abc123',
    'oliverio':'def456',
    'admin':'tcc123',
    'student':'123zxc',
    'user':'987cba'
  }];

    if (username == 'jared' && password == 'abc123') {
      res.sendFile(path.join(__dirname, "matches.html"));
    }
  });

app.listen(4000, () => {
  console.log('listening');
})

