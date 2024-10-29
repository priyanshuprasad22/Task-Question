const express=require('express');
const router=express.Router();

const {addJob,getAllJobs,updateJob}=require('../controllers/task.js');


router.get('/',getAllJobs);
router.put('/:id',updateJob);
router.post('/add',addJob);

module.exports=router;