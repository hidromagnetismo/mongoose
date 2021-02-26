//          node crud/delete.js                     

require('../connection');

const Product = require('../models/Product');

const someFunction = async () => {
    const result = await Product.deleteMany({name: 'Laptop'});
    console.log(result);
}

someFunction();
