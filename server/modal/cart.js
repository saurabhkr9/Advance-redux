const mongoose = require('mongoose');
const Cart = mongoose.model('Cart', {
    items:{
        type: Array
    },
    totalQuantity:{
        type: Number
    }
});

module.exports = Cart;