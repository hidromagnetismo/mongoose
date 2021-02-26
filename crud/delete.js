//          node crud/delete.js                     

require('../connection');

const Product = require('../models/Product');

const someFunction = async () => {
    const result = await Product.deleteOne({name: 'Laptop HP'});
    console.log(result);
}

someFunction();
