const db = require('./index.js');

const faker = require('faker');

const productsArray = [];
const categoriesArray = [];
const searchesArray = [];
const statusArray = ['Active', null];

const getRandomNumber = function (min, max) {
  return Math.random() * (max - min) + min;
};


// seed products table

for (var i = 0; i < 100; i++) {
  let dataObject = {
    name: faker.commerce.productName,
    status: statusArray[Math.floor(Math.random() * statusArray.length)],
    id_Categories: getRandomNumber(1,11)
  }

  productsArray.push(dataObject);
};

for (var i = 0; i < productsArray.length; i++) {
  db.connection.query('INSERT INTO products SET ?', productsArray[i], (err, res) => {
    if (err) throw err;
    console.log('Product data successfully inserted');
  });
};

//seed categories table

for (var i = 0; i < 10; i++) {
  let dataObject = {
    name: faker.commerce.department
  }

  categoriesArray.push(dataObject);
};

for (var i = 0; i < categoriesArray.length; i++) {
  db.connection.query('INSERT INTO categories SET ?', categoriesArray[i], (err, res) => {
    if (err) throw err;
    console.log('Categories data successfully inserted');
  })
}

// seed Searches table

for (var i = 0; i < 100; i++) {
  let dataObject = {
    name: faker.commerce.productName,
    datetime: faker.date.recent
  }

  searchesArray.push(dataObject);
}

for (var i = 0; i < searchesArray.length; i++) {
  db.connection.query('INSERT INTO searches SET ?', searchesArray[i], (err, res) => {
    if (err) throw err;
    console.log('Searches data successfully inserted');
  })
}