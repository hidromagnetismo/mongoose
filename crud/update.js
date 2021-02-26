
//          node crud/update.js                     

require('../connection');

const User = require('../models/User');

async function updateUsers() {
    const user = await User.updateOne({username: 'fatz'}, {
        password: 'contraseñaSegura'
    });
    console.log(user);
}

updateUsers();
