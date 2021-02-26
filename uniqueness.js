
//          node uniqueness.js                     

require('./connection');

const User = require('./models/User');

async function createUsers() {
    const userOne = new User({
        username: 'joe',
        password: '12345',
    });
    let user = await userOne.save();
    console.log(user);
    
    
    const userTwo = new User({
        username: 'clark',
        password: '12345',
    });
    user = await userTwo.save();
    console.log(user);
    
}

createUsers();
