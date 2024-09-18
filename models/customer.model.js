import  mongoose from 'mongoose';

const customerSchema = new mongoose.Schema({
    c_code: {
        type: Number,
        required:true
    },
    c_name: {
        type: String,
        required:true
    },
    c_phone:{
        type: String,
        required:true
    },
    c_address:{
        type: String,
        required:true
    }
})

export const Customer = mongoose.model('Customer',customerSchema);