const express = require('express'); // common.js的引入方式
const app = express();

app.get('/', function(req, res) {
  res.send('Hello World')
})