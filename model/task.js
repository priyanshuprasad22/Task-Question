const mongoose=require('mongoose');
const taskSchema=new mongoose.Schema({
    title:{type:String},
    task:{type:String}
})

const taskModel=mongoose.model('Task',taskSchema);
module.exports=taskModel;
