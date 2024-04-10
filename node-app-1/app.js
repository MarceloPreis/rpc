const express = require('express');
const app = express();
app.use(express.json());

const PersonController = require(`./controller/PersonController`);


app.get('/', (req, res) => {
    res.json({"message": "success"});
});

// Rotas para Building
app.get('/building/list', (req, res) => {
    res.json(buildings);
});

app.get('/building/:id', (req, res) => {
    res.json(buildings);
});

app.post('/building', (req, res) => {
    res.status(201).json(building);
});

app.put('/building/:id', (req, res) => {
    const building = req.body;
    buildings.push(building);
    res.status(201).json(building);
});

app.delete('/building/:id', (req, res) => {
    const personId = parseInt(req.params.id);

    if (index === -1) {
        return res.status(404).send('Person não encontrado');
    }

    res.status(204).send();
});

// Rotas para Person
app.get('/person/list', (req, res) => {
    res.json(persons);
});

app.get('/person/:id', (req, res) => {
    res.json(persons);
});

app.post('/person', async (req, res) => {
    const person = await (new PersonController()).save(req.body)
    res.status(201).json(JSON.parse(person));
});

app.put('/person/:id', (req, res) => {
    const person = req.body;
    res.status(201).json(person);
});

app.put('/person/:id', (req, res) => {
    const person = req.body;
    res.status(201).json(person);
});

app.delete('/person/:id', (req, res) => {
    const personId = parseInt(req.params.id);

    if (index === -1) {
        return res.status(404).send('Person não encontrado');
    }

    res.status(204).send();
});

// Rotas para Deal
app.get('/deal/list', (req, res) => {
    res.json(deals);
});

app.get('/deal/:id', (req, res) => {
    res.json(deals);
});

app.post('/deal', (req, res) => {
    res.status(201).json(deal);
});

app.put('/deal/:id', (req, res) => {
    const deal = req.body;
    res.status(201).json(deal);
});

app.put('/deal/:id', (req, res) => {
    const deal = req.body;
    res.status(201).json(deal);
});

app.delete('/deal/:id', (req, res) => {
    const dealId = parseInt(req.params.id);

    if (index === -1) {
        return res.status(404).send('deal não encontrado');
    }

    res.status(204).send();
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
})