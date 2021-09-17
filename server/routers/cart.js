const express = require('express');
const router = new express.Router();
const Cart = require('../modal/cart');


router.patch('/cart' , async (req , res)=>{
    const cart = new Cart(req.body);
    try{
        const oldCart = await Cart.find({});
        if(oldCart.length === 0){
            await cart.save();
        }else{
            const cartItem = oldCart[0];

            var newCart = await Cart.findOneAndUpdate(
                cartItem._id,
                req.body,
                {upsert: true }
                );
        }
        
        res.status(200).send(newCart);
    }catch(e){
        res.status(400).send(e);
    }
});

router.get('/cart' , async (req , res)=>{
    try{
        const cart = await Cart.find({});
        res.send(cart[0]);
    }catch(e){
        res.status(500).send(e);
    }
})

module.exports = router;