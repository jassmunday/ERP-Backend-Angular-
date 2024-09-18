import mongoose from 'mongoose';

const menuSchema = new mongoose.Schema({
    parent_name: {
        type: String,
        required:true
    },
    menu_name: {
        type: String,
        required:true
    },
    controller_name: {
        type: String,
        required:true
    },
    action_name: {
        type: String,
        required:true
    },
    link_address: {
        type: String,
        required:true
    },  
})

export const Menu = mongoose.model('Menu',menuSchema);

//   id?:string,
//   parent_name:string,
//   menu_name:string,
//   controller_name: string,
//   action_name:string,
//   link_address:string

