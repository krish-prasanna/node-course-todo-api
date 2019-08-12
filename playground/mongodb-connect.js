// const MongoClient = require('mongodb').MongoClient;
const {MongoClient,ObjectID} = require('mongodb');
var obj = new ObjectID();
console.log(obj);
// var user = {name:'krishna',age:25}
// var {name} = user;
// console.log(name);

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,client) => {
if(err){
    console.log('Unable to connect the database.');
} else{
    console.log('Successfully connected to database.');
}
// const db = client.db('TodoApp');


// db.collection('Todos').insertOne({
//     text:'Somrthing to do',
//     completed:false
// },(err,result) => {
//     if(err){
//         return console.log('Unable to insert todo',err);
//     }
//     console.log(JSON.stringify(result.ops,undefined,2));
// });


// db.collection('users').insertOne({
//    name : 'Krishna',
//    age : 24,
//    location : 'Bangalore' 
// },(err,result) => {
//     if(err){
//                 return console.log('Unable to insert todo',err);
//             }
//             console.log(JSON.stringify(result.ops[0]._id.getTimestamp(),undefined,2));
//             // console.log(result.ops);
// });
client.close();
});