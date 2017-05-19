const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.json({message: 'Hello World!'});
});

app.get('/test', (req, res) => { res.json({test: 123})});

app.get('/environment', (req, res) => {
    res.json(process.env);
});

app.listen(PORT, function () {
  console.log(`Example app listening on port ${PORT}!`);
});
