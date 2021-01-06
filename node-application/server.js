let express = require('express');
let path = require('path');
let fs = require('fs');
let bodyParser = require('body-parser');
let app = express();

const PORT  = 3000;
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

app.get('/', function (req, res) {
    res.send({"ms": `server is hack on port: ${PORT}`})
  });

app.listen(PORT, function () {
  console.log(`Hello friends`);
});
