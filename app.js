const express = require('express');
const bodyparse = require('body-parser');
const user = require('./models/userSchema');

const app = express();
//middleware
app.use(bodyparse.json());
app.use(require('./routes/auth'));




module.exports = app;