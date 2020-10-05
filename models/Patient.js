const mongoose = require('mongoose');
const schema = mongoose.Schema;

const patientSchema = new schema ({

    name: {
        type:String,
        required: true
    },
    age: Number,
    address:[{
        streetNumber: Number,
        streetName : String,
        city: String,
        state: {
            type: String,
            minlength: 2,
            maxlength: 2
        }
    }],
    insurance:String,
    primarydoc: String
},{timestamps:true});

module.exports = mongoose.model('Patient',patientSchema); 
