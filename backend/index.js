const express = require('express');
const app = express();

//environment
require('dotenv').config();

app.get('/games', function (req, res) {
    res.status(200).send("Hi Games!");
});


app.listen(process.env.PORT, () => {
    console.log('listening on port ' + process.env.PORT);
})