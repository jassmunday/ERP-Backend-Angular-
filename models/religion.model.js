import  mongoose from 'mongoose';

const religionSchema = new mongoose.Schema({
    religion_id: {
        type: Number,
        required:true
    },
    religion_name: {
        type: String,
        required:true
    }
})

export const Religion = mongoose.model('Religion',religionSchema);