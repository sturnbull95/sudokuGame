const express = require('express');
const parser = require('body-parser');
const path = require('path');
const PORT = 1111;

const app = express();
// const mongoose = require('mongoose');
// const Comments = require('../database/comments.js');
app.use(express.static(path.join(__dirname, '../static')));
app.use(parser.json());
app.use(parser.urlencoded({ extended: true }));

app.get('/',function(req,res){
  res.send(200)
})
app.listen(PORT, () => {
  console.log('App is listening on PORT:', PORT);
});
