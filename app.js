const express = require('express');
const bodyparse = require('body-parser');
const user = require('./models/userSchema');
const property = require('./models/propertySchema');

const app = express();
//middleware
app.use(bodyparse.json());
app.use(require('./routes/auth'));
app.use(require('./routes/properties'))
app.use(require('./routes/searchRoutes'));




module.exports = app;