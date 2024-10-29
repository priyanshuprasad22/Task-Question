const express=require('express');
const router=express.Router();

const {RegisterUser,loginUser}=require('../controllers/auth.js');

router.post('/register',RegisterUser);
router.post('/login',loginUser);

module.exports=router;