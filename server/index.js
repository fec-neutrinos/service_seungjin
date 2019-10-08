const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'fec'
});

connection.connect(err => {
  if (err) {
    return err;
  } else {
    console.log("DB connection successful");
  }
});


