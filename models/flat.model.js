import  mongoose from 'mongoose';

const flatSchema = new mongoose.Schema({
    flat_no: {
        type: Number,
        required:true
    },
    flat_name: {
        type: String,
        required:true
    },
    flat_price:{
        type: Number,
        required:true
    }
})

export const Flat = mongoose.model('Flat',flatSchema);