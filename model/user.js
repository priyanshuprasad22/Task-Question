const mongoose =require('mongoose');
const userSchema=new mongoose.Schema({
    email:{type: String,require:true},
    username:{type: String,require:true},
    password:{type:String,require:true}
});

const userModel=mongoose.model('User',userSchema);

module.exports=userModel;