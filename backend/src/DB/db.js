import mongoose from 'mongoose'
import dotenv from "dotenv";
dotenv.config();

const dbConnection= async()=>{
    try{
    const connectionInstance=await mongoose.connect(`${process.env.MONGODB_URI}`)

    console.log(`db is connected ${connectionInstance.connection.host}`)
    }
    catch(error){
        console.log("something went wrong while connecting to the db",error);
    }
}

export default dbConnection;