const mongoose= require('mongoose');

mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);

//name of the db is products-api
mongoose.connect('mongodb://localhost/products-api');

const db=mongoose.connection;
//Error Handling
 db.on('error', console.error.bind(console,"Cannot connect to the Database"));

 //Upon successfull connection to db
 db.once('open', ()=>{
     console.log("Databse connection establised successfully!");
 });

 module.exports=db;
