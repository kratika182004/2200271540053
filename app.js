const express = require('express');
const app = express();
const logger = require('./middleware/logger');
const urlRoutes = require('./routes/urlRoutes');
require('dotenv').config();

app.use(express.json());
app.use(logger);
app.use('/', urlRoutes);

module.exports = app;

