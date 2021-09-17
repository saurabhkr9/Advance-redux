const mongoose = require('mongoose');
// const validator = require('validator');

const Item = mongoose.model('Item',{
    id: {
        type: String,
        required: true,
        trim: true,
    },
    name:{
        type: String,
        required: true,
        default: false,
    },
    price:{type: Number, 
        required: true
    },
    quantity:{
        type:Number,
        required: true
    },
    totalPrice:{
        type: Number,
        required: true
     }
});

module.exports = Item;