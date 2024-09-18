import mongoose from "mongoose";

export const MarksSchema = new mongoose.Schema({
    subject: {
        type: String,
        required: true
    },
    marks: {
        type: Number,
        required: true
    },
})

export const StudentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    roll_no: {
        type: Number,
        required: true
    },
    branch: {
        type: String,
        required: true
    },
    year: {
        type: String,
        required: true
    },
    marks: {
        type: [MarksSchema],
        required: true
    },

});

export const Student = mongoose.model('Student',StudentSchema);