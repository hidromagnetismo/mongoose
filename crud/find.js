
//          node crud/find.js                     

require('../connection');

const Product = require('../models/Product');

async function main() {
    const products = await Product.find({name: 'Laptop'});
    console.log(products);
}

main();
