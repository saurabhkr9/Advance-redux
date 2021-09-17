const mongoose = require('mongoose');

const connectionURL = 'mongodb+srv://sapatel9:Saurabh1995@cluster0.ncog6.mongodb.net/mongoDB?retryWrites=true&w=majority';

mongoose.connect(connectionURL, {
    useNewUrlParser:true
});
