const express = require('express');
const app = express();
// const port = 3008;
const bodyParser = require('body-parser');

app.use(express.static('client/dist'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.get('/', (req, res) => {
  res.send(200);
})



// app.listen(port, () => console.log(`Listening on port ${port}`));

module.exports = app;