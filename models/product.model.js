import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
    p_code: {
        type: Number,
        required: true,
        unique: true
    },
    p_name: {
        type: String,
        required: true
    },
    uom: {
        type:String,
        required: true
    }
});

export const Product = mongoose.model('Product', productSchema);
