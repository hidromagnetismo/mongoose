
//          node crud/create.js                     

require('../connection');

const Product = require('../models/Product');

const createProducts = async () => {

    const laptopOne = new Product({
        name: 'Laptop HP',
        description: 'HP Pavilion 15'
    });
    await laptopOne.save();

    const laptopTwo = new Product({
        name: 'Laptop Lenovo',
        description: 'Lenovo X1'
    });
    await laptopTwo.save();

}

createProducts();
