const db = require('../database/index.js');
const express = require('express');
const app = express();
// const port = 3008;
const bodyParser = require('body-parser');

app.use(express.static('client/dist'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// const connection = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password: '',
//   database: 'FEC'
// });

// connection.connect(err => {
//   if (err) {
//     return err;
//   } else {
//     console.log("DB connection successful");
//   }
// });

function escapeRegexCharacters(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function getSuggestions(value, result) {
  const escapedValue = escapeRegexCharacters(value.trim());
  const regex = new RegExp('^' + escapedValue, 'i');

  return result.filter(product => regex.test(product.name));
}


app.get('/', (req, res) => {
  res.send(200);
})

app.post('/search', (req, res) => {
  console.log('req body', req.body);
  let name = req.body.input
  db.connection.query('SELECT name FROM products', (err, result) => {
    if (err) {
      return res.send(err);
    } else {
      console.log('query result', result);
      res.send(getSuggestions(name, result))
    }
  })
})


// app.listen(port, () => console.log(`Listening on port ${port}`));

module.exports = app;