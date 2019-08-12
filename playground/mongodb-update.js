// const MongoClient = require('mongodb').MongoClient;
const {MongoClient,ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,client) => {
if(err){
    console.log('Unable to connect the database.');
} else{
    console.log('Successfully connected to database.');
}
 const db = client.db('TodoApp');

// db.collection('Todos').findOneAndUpdate({
//     _id : new ObjectID('5d5116263dd4d0926da36e5d')
// },{
//     $set : {
//         completed : true
//     }
// },{
//     returnOriginal : false
// }).then((result) => {
//     console.log(result);
// });

db.collection('users').findOneAndUpdate({
    _id : new ObjectID('5d501f67628d7c38e071f973')
},{
    $set : {
        name : 'Prasanna'
    },
        $inc : {
              age : 2
        }
    
},{
    returnOriginal : false
}).then((result) => {
    console.log(result);
});
client.close();
});