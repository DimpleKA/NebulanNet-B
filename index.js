const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use('/', (req, res) => {
    res.send("Hello, world!");
});


This is dimple's change HEAD

const vatsal = "Vatsal Changes";

Dimple adding second change to the code 


app.listen(PORT, () => {
    console.log("Server is running at http://localhost:" + PORT);
});
