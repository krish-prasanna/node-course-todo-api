// const MongoClient = require('mongodb').MongoClient;
const {MongoClient,ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,client) => {
if(err){
    console.log('Unable to connect the database.');
} else{
    console.log('Successfully connected to database.');
}

const db = client.db('TodoApp');
//delete many
// db.collection('Todos').deleteMany({text : 'eat1 lunch'}).then((result) => {
//     console.log(result);
// },(err) => {
// console.log('Does not find any match');
// })

//delete one
// db.collection('Todos').deleteOne({text : 'eat lunch'}).then((result) => {
//     console.log(result);
// },(err) => {
// console.log('Does not find any match');
// })

// find One and delete
// db.collection('Todos').findOneAndDelete({completed : false}).then((result) => {
//     console.log(result);
// },(err) => {
// console.log('Does not find any match');
// })

// db.collection('users').deleteMany({name : 'Krishna'}).then((result) => {
//     console.log(result);
// });

db.collection('users').findOneAndDelete({_id : new ObjectID('5d502572de0c342714dbfb62')}).then((result) => {
    console.log(result);
});
// client.close();
});