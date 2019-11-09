const db = require('./index.js');
const faker = require('faker');

const getRandomNumber = function (min, max) {
  return Math.random() * (max - min) + min;
};

const seed = () => {

  const searchesArray = [];
  const categoriesArray = [];

  //seed categories table

  for (var i = 0; i < 10; i++) {
    categoriesArray.push([faker.commerce.department()]);
  };

  db.connection.query('INSERT INTO categories (name) VALUES ?', [categoriesArray], (err, res) => {
    if (err) {
      throw err;
    }
    console.log('Categories data successfully inserted');
  })

  // seed Searches table

  for (var i = 0; i < 100; i++) {
    searchesArray.push([faker.commerce.productName()]);
  }

  db.connection.query('INSERT INTO searches(name) VALUES ?', [searchesArray], (err, res) => {
    if (err) throw err;
    console.log('Searches data successfully inserted');
  })


  // seed Products table
  const productsArray = [];
  // const statusArray = ['Active', null];

  for (var i = 0; i < 100; i++) {
    productsArray.push([faker.commerce.productName()]);
  };

  db.connection.query('INSERT INTO products(name) VALUES ?', [productsArray], (err, res) => {
    if (err) throw err;
    console.log('Product data successfully inserted');
  });
}


seed();
