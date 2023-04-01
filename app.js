const express = require('express');
const app = express();
const cors = require("cors");
const bodyparse = require('body-parser');
const {validateToken} = require("./middleware/token");
require("dotenv").config();
const authRoutes = require('./routes/auth');
const propertyRoutes = require('./routes/properties')
const searchRoutes = require('./routes/searchRoutes');
const bodyParser = require('body-parser');

//middleware
app.use(express.json({ limit: "50mb" }));
app.use(
  express.urlencoded({ limit: "50mb", extended: true, parameterLimit: 50000 })
);

app.use(bodyParser.json({limit: "50mb"}));
app.use(
    bodyparse.urlencoded({
        limit:"50mb",
        extended: true,
        parameterLimit: 50000
    })
);


app.use(cors());
// app.use(require('./routes/auth'));
// app.use(require('./routes/properties'))
// app.use(require('./routes/searchRoutes'));

app.use("/api/users",authRoutes);

app.use("/api/property",validateToken,propertyRoutes);
app.use('/api/search',searchRoutes);




module.exports = app;