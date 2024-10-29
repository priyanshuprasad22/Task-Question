const {MongoClient,ServerApiVersion}=require('mongodb');
const dotenv=require('dotenv');

dotenv.config();

const uri=process.env.MONGO_URI;

const client=new MongoClient(uri,{
    serverApi:{
        version:ServerApiVersion.v1,
        strict:true
    }
});

async function connect(){
    try{
        await client.connect();
        console.log("Database connected Successfully!");
    }catch(error){
        console.log(error);
    }    
}

module.exports=connect;

