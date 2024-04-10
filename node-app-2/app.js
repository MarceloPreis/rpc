const express = require('express');
const app = express();
app.use(express.json());
const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database('./database.db', (err) => {
    if (err) {
        console.error(err.message);
    }
    console.log('Conectado ao banco de dados.');
});


app.get('/', (req, res) => {
    console.log('asdf')
    res.json({"message": "success"});
});

app.listen(3001, function () {
    console.log('Example app listening on port 3001!')
})