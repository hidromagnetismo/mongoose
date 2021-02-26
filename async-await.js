
require('./connection');

const Product = require('./models/Product');

async function main() {
    const product = new Product({
        name: 'Keyboard',
        description: 'Coursair K68 RGB Gaming Keyboard',
        price: 150
    });

    const productSave = await product.save();
    return productSave;
}

main()
    .then(productSave => console.log(productSave))
    .catch(err => console.log(err));
