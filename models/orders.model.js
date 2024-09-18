import mongoose from 'mongoose';

const orderItemSchema = new mongoose.Schema({
    code: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    uom: {
        type:String,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    rate: {
        type: Number,
        required: true
    },
    amount: {
        type: Number,
        required: true
    }
});

const orderSchema = new mongoose.Schema({
    order_id: {
        type: String,
        required: true,
        unique: true
    },
    customer_code: {
        type:Number, 
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    order_date: {
        type: String,
        required:true
    },
    payment_mode: {
        type: String,
        required: true
    },
    order_total: {
        type: Number,
        required: true
    },
    order_items: [orderItemSchema]
});

export const Order = mongoose.model('Order', orderSchema);
