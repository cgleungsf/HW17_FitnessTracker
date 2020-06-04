const express = require('express');
const mongoose = require('mongoose');
const logger = require('morgan');

const routes = require('./apiRoutes');
const app = express();
const PORT = process.env.PORT || 3001;

app.use(logger('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

require("./apiRoutes")(app);
require("./htmlRoutes")(app);


mongoose.connect(process.env.MONGODB_URI  || 'mongodb://localhost/workout',{  useNewUrlParser: true,useFindAndModify:false , useUnifiedTopology: true } );

app.listen(PORT);
