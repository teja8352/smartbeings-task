const express = require('express');
const bodyparser = require('body-parser');
const path = require('path');

const api = require('./server/routes/api');
const port = process.env.PORT || 8080;
const app = express();

app.use(express.static(path.join(__dirname, 'dist/task')));

app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());

app.use('/api', api);
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, './dist/task/index.html'));
});

app.listen(port, () => {
  console.log('Server Started');
});
