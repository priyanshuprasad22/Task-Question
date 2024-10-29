let arr=[];

const addJob= async (req,res)=>{
    const task=req.body;
    console.log(task);

    try{
        if(task){
            arr.push(task);
            return res.status(200).json(task);
        }

        res.status(400).json({msg:"Please send valid task"});
    }catch(error){
        console.error(error);
    }
}

const updateJob=async(req,res)=>{
    const id=req.params.id;

    try{
        const task=arr.filter((arr)=>{
            return arr.id!=id;
        })

        arr=task;

        return res.status(200).json({msg:"Task deleted successfully"});

    }catch(error){
        console.error(error);
        res.status(500).json({msg:"Internal Error"});
    }
}

const getAllJobs=async(req,res)=>{
    try{
        return res.status(200).json(arr);
    }catch(error){
        console.error(error);
        return res.status(500).json({msg:"Internal Error"});
    }
}

module.exports={addJob,updateJob,getAllJobs};