//          node crud/delete.js                     

require('../connection');

const Product = require('../models/Product');

const someFunction = async () => {
    const result = await Product.findOneAndDelete({name: 'Keyboard'});
    console.log(result);
}

someFunction();
