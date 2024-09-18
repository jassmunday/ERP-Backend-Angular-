import mongoose from 'mongoose';

const uomSchema = new mongoose.Schema({
    measurement_code: {
        type: String,
        required: true,
        unique: true
    },
    measurement_name: {
        type: String,
        required: true,
        unique: true
    }
});

export const UOM = mongoose.model('UOM', uomSchema);
