require('dotenv').config()
const express = require('express');
const app = express();
const port = 3000;
const apiRoutes = require('./src/routes/apiRoutes');
const connectDb = require('./src/config/dbConnection');



app.use(express.json());

connectDb();

app.use('/', apiRoutes)

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
})