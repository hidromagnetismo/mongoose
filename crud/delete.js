//          node crud/delete.js                     

require('../connection');

const Product = require('../models/Product');

const someFunction = async () => {
    const result = await Product.findByIdAndDelete('60389946bf4ecc563953e4da');
    console.log(result);
}

someFunction();
