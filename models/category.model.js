import  mongoose from 'mongoose';

const categorySchema = new mongoose.Schema({
    category_no: {
        type: Number,
        required:true
    },
    category_name: {
        type: String,
        required:true
    }
})

export const Category = mongoose.model('Category',categorySchema);