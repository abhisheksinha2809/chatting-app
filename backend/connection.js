const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(`mongodb+srv://abhisheksinha9025:abhishek21@cluster0.rc0cfnx.mongodb.net/?retryWrites=true&w=majority`, ()=> {
  console.log('connected to mongodb')
})
