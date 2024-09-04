const mongoose = require('mongoose')
const userSchema=  new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name:String,
    userName:String,
    passWord:String,
});

const userDetail = mongoose.model("users",userSchema);
module.exports = userDetail;
