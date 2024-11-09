const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use('/', (req, res) => {
    res.send("Hello, world!");
});

<<<<<<< 
This is dimple's change HEAD
=======
const vatsal = "Vatsal Changes";
>>>>>>> 5b7aec87069dc9d2cc18757b9f5ab1c849d21ae2

app.listen(PORT, () => {
    console.log("Server is running at http://localhost:" + PORT);
});
