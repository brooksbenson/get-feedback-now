const express = require('express');
const app = express(); //app is where all route handlers will be registered.

app.get('/', (req, res) => {
  res.send({hi: 'hello'});
});

app.listen(3000);