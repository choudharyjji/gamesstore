const express = require('express');
const app = express();
const sql = require('./src/db');

//environment
require('dotenv').config();

app.get('/games', async function (req, res) {

    const games = await sql`
        select * from games
    `;

    console.log(games);

    res.status(200).send("Hi Games!");
});


app.listen(process.env.PORT, () => {
    console.log('listening on port ' + process.env.PORT);
})