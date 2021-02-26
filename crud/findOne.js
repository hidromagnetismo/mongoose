
//          node crud/findOne.js                     

require('../connection');

const Product = require('../models/User');

async function getUser() {
    const user = await Product.findOne({username: 'fatz'});
    console.log(user);
}

getUser();
