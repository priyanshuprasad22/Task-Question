const express=require('express');
const app=express();
const dotenv=require('dotenv');

const router=require('./router/task');
const authRouter=require('./router/AuthRoute');

const connectDB=require('./config/db');

dotenv.config();

app.use(express.json());
connectDB();

app.use('/api/v1',router);
app.use('/api/v1/auth',authRouter);

const PORT=process.env.PORT || 3000;

app.listen(PORT,()=>{
    console.log(`Application is listening on PORT ${PORT}`);
})