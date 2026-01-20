import express from 'express'
import dotenv from 'dotenv'
import dbConnection from './DB/db.js';
import cookieParser from 'cookie-parser';
import cors from 'cors'
dotenv.config();



const app=express();


app.use(express.json({limit:"16kb"}));
app.use(express.urlencoded({extended:true, limit:"16kb"}))
app.use(cookieParser());

app.use(cors({
    origin:process.env.CORS_ORIGIN_LOCAL,
    credentials:true
}))


const PORT=4000 || process.env.PORT;

dbConnection()
.then( ()=>{
    app.listen(PORT ,()=>{
        console.log(`app is listen at port: ${process.env.PORT}`);
    })
})
.catch((error)=>{
    console.log(`database connection failed ,${error}`)
});