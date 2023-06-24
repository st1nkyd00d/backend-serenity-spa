require('dotenv').config()
const express = require('express');
const app = express();
const port = 3000;
const apiRoutes = require('./src/routes/apiRoutes');
const adminRoutes = require('./src/routes/adminRoutes');
const connectDb = require('./src/config/dbConnection');
const cors = require('cors');

app.use(express.json());
app.use(cors())

connectDb();

app.use('/', apiRoutes)

app.use('/', adminRoutes)

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
})