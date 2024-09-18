import mongoose from 'mongoose';

export const companySchema = new mongoose.Schema({
    code: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    address: {
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
    phone: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    md_name: {
        type: String,
        required: true
    },
    md_address: {
        type: String,
    },
    md_mobile: {
        type: String,
        required: true
    },
    md_designation: {
        type: String,
        required: true
    },
    bank_name: {
        type: String,
        required: true
    },
    account: {
        type: String,
        required: true
    },
    ifsc_code: {
        type: String,
        required: true
    },
    branch_name: {
        type: String,
        required: true
    },
    branch_address: {
        type: String,
        required: true
    },
    pf_applicable: {
        type: Boolean
    },
    pf_number: {
        type: String
    },
    pf_user_id: {
        type: String
    },
    pf_password: {
        type: String
    },
    pf_rate: {
        type: Number
    },
    pf_website:{
        type: String
    },
    esi_applicable: {
        type: Boolean
    },
    esi_number: {
        type: String
    },
    esi_user_id: {
        type: String
    },
    esi_password: {
        type: String
    },
    esi_rate: {
        type: Number
    },
    esi_website:{
        type: String
    },
    lwf_applicable: {
        type: Boolean
    },
    lwf_number: {
        type: String
    },
    lwf_user_id: {
        type: String
    },
    lwf_password: {
        type: String
    },
    lwf_employer_rate: {
        type: Number
    },
    lwf_employee_rate: {
        type: Number
    },
    lwf_website:{
        type: String
    },
});


export const Company = mongoose.model('Company',companySchema);