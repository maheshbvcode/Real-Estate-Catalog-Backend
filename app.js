const express = require('express');
const bodyparse = require('body-parser')

const app = express();
//middleware
app.use(bodyparse.json());




module.exports = app;