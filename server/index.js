const express = require('express');
const cors = require('cors');
require('./db/mongoose');

const app = express();

const cartRouter = require('./routers/cart');

const port = process.env.PORT || 3000;


app.use(express.json());
app.use(cors())

app.use(cartRouter);

app.listen(port,()=>{
    console.log('listening on port '+port);
});