'use strict';

var express = require('express');
var cors = require('cors');

// require and use "multer"...
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });

var app = express();

app.use(cors());
app.use('/public', express.static(process.cwd() + '/public'));

app.post("/api/fileanalyse", upload.any(), (req, res, next) => {
  res.send({
    name: req.files[0]["originalname"],
    type: req.files[0]["mimetype"],
    size: req.files[0]["size"]
  });
});

app.get('/', function (req, res) {
     res.sendFile(process.cwd() + '/views/index.html');
  });

app.get('/hello', function(req, res){
  res.json({greetings: "Hello, API"});
});

app.listen(process.env.PORT || 3000, function () {
  console.log('Node.js listening ...');
});
