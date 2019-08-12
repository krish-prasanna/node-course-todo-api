// const MongoClient = require('mongodb').MongoClient;
const {MongoClient,ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,client) => {
if(err){
    console.log('Unable to connect the database.');
} else{
    console.log('Successfully connected to database.');
}

const db = client.db('TodoApp');

// db.collection('Todos').find({
//     _id : new ObjectID('5d4f8d65a806460c441dcb57')
// }).toArray().then((docs) => {
// console.log('Todos');
// console.log(JSON.stringify(docs,undefined,2));
// },(err) => {
//     console.log('Unable to fetch todos',err);
// });

// db.collection('Todos').find().count().then((count) => {
// console.log(`Todos count : ${count}`);
// },(err) => {
//     console.log('Unable to fetch todos',err);
// });

db.collection('users').find({name:'Krishna'}).count().then((count) => {
    console.log(`users count : ${count}`);
    // console.log(JSON.stringify(count,undefined,2));
    },(err) => {
        console.log('Unable to fetch todos',err);
    });
// client.close();
});