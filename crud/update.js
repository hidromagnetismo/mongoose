
//          node crud/update.js                     

require('../connection');

const User = require('../models/User');

const someFunction = async () => {
    const user = await User.findOne({username: 'joe'});
    console.log(user);
    user.password = 'miNuevaContraseña';
    const result = await user.save();
    console.log(result);
}

const otherFunction = async () => {
    const user = await User.findOneAndUpdate({username: 'clark'}, {
        name: 'Gordon Clark'
    }, {new: true});
    console.log(user);
}

async function updateUsers() {
    const user = await User.updateOne({username: 'fatz'}, {
        password: 'contraseñaSegura'
    });
    console.log(user);
}

otherFunction();
