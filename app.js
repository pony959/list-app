const express = require('express');

const app = express();

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render('top.ejs');
});

app.get('/index' , (req,res) => {
  res.render('index.ejs');
});

const port = process.env.PORT || 8000;