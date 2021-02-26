
const mongoose = require('mongoose');

// Acceso:

// mongo:  {mongo --username root --password "123456"}
// mongo:  {mongo "mongodb://root:123456@localhost:27017"}

// Crear Base de datos y usuario:

// {use myWebStore}
// {

// db.createUser(
//    {
//       user: "root",
//       pwd: "123456",
//       roles: [ { role: "readWrite", db: "myWebStore" } ]
//    }
// )

// }

const uri = 'mongodb://root:123456@localhost:27017/myWebStore';
const db = mongoose.connection;

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
}).catch(err => console.log(err));

db.on('open', _ => {
    console.log('Database is connected to', uri);
});

db.on('error', err =>{
    console.log(err);
});

