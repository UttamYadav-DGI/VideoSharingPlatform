import mongoose, { Schema } from "mongoose";

const userSchema=new mongoose.Schema({
    
    username:{
        type:String,
        unique:true,
        lowercase:true
    },
    email:{
        type:String,
        unique:true,
        lowercase:true
    },
    fullName:{
        type:String,
        lowercase:true,
        required:true
    },
    Password:{
        type:String,
        required:[true,"password is required"],
    },
    Avatar:{
        type:String,
        required:true
    },
    coverImage:{
        type:String,
    },
    accessToken:{
        type:String
    },
    refreshToken:{
        type:String
    }
},
{
    timestamps:true,
}

)

export const User =Schema.model("users",userSchema);