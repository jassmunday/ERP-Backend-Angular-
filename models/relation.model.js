import  mongoose from 'mongoose';

const relationSchema = new mongoose.Schema({
    relation_id: {
        type: Number,
        required:true
    },
    relation_name: {
        type: String,
        required:true
    }
})

export const Relation = mongoose.model('Relation',relationSchema);