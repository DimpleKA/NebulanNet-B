const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;
const connectDB = require("./config/db");
require('dotenv').config();

connectDB();

app.use(cors())

app.use('/api/test', (req, res) => {

    res.send("Hello, world!");
});


app.listen(PORT, () => {
    console.log("Server is running at http://localhost:" + PORT);
});
