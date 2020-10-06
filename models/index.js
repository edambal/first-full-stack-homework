// This the db connection page
const mongoose = require('mongoose');
const connectionString =  'mongodb://localhost:27017/patients';

mongoose.connect(connectionString,{
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex:true,
    useUnifiedTopology:true
});

mongoose.connection.on('connect',()=>{
    console.log("mondb connected successfully");
})
mongoose.connection.on('error',()=>{
    console.group(error);
})

module.exports = {
    Patient: require('./Patient')
}