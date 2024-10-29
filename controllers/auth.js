const userModel=require('../model/user.js');
const bcrypt=require('bcrypt');

const RegisterUser=async (req,res)=>{

    const user=req.body;

    try{

        if(!user.email || !user.password || !user.username){
            return res.status(400).json({msg:"Unable to register"});
        }

        const username=user.username;
        const email=user.email;
        const password=user.password;

        const hashPassword=await bcrypt.hash(password, 10);
        
        const userObj={
            username:username,
            email:email,
            password:hashPassword
        }

        const userObject=new userModel(userObj);
        userObject.save();
        return res.status(200).json({msg:"User registered Successfully"});
    }catch(error){

        console.log(error);

    }
}

const loginUser=(req,res)=>{
    const email=req.email;
    const password=req.password;

    try{
        if(!email || !password){
            return res.status(400).json({msg:"Email or password missing"});
        }

        const currUser=userModel.findOne({email:email});

        const compare=bcrypt.compare(currUser.password,password);

        if(compare){
            return res.status(200).json({msg:"User login successful"});
        }else{
            return res.status(200).json({msg:"Please check the password"});
        }


        
    }catch(error){
        console.log(error);
    }
}

module.exports={loginUser,RegisterUser};