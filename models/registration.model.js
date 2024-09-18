import mongoose from 'mongoose';

// Define the family schema
const familySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    m_dob: {
        type: String,
        required: true,
    },
    m_relation: {
        type: String,
        required: true,
    }
});

// Define the registration schema
const registrationSchema = new mongoose.Schema({
    unique_id: {
        type: Number,
        required: true,
        unique: true
    },
    user_name: {
        type: String,
        required: true
    },
    dob: {
        type: String,
        required: true
    },
    joining_date: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    photo: {
        type: String
    },
    leaving_date: {
        type: String
    },
    father_husband_name: {
        type: String,
        required: true
    },
    father_husband_relation: {
        type: String,
        required: true
    },
    mother_name: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    email_id: {
        type: String,
        required: true
    },
    aadhar_no: {
        type: String,
        required: true
    },
    pan_no: {
        type: String,
        required: true
    },
    uan: {
        type: String,
        required: true
    },
    religion: {
        type: String,
        required: true
    },
    relation: {
        type: String,
        required: true
    },
    flats: {
        type: Number,
        required: true
    },
    bank_name: {
        type: String,
        required: true
    },
    account_no: {
        type: String,
        required: true
    },
    ifsc_code: {
        type: String,
        required: true
    },
    bank_address: {
        type: String,
        required: true
    },
    house_no: {
        type: String,
        required: true
    },
    street_no: {
        type: String,
        required: true
    },
    area: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    },
    familyMembers: [familySchema], // Embedded array of family members
});

// Create the model
export const Registration = mongoose.model('Registration', registrationSchema);
