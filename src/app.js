const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

const PORT = 3000;

app.get('/', (req, res) => res.send('Hello World!'));
app.post('/', (req, res) => {
  res.send(req.body);
});

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`));
