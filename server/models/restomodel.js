const mongoose=require('mongoose');

const restoSchema=new mongoose.Schema({
    name:String,
    address:String,
    email:String,
});

module.exports=mongoose.model('restomodel',restoSchema,'restaurants');