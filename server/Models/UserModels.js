import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const userSchema = mongoose.Schema({
  name:{
    type:String,
    require:true
  },
  email:{
    type:String,
    require:true,
    unique:true,
  },
  password:{
    type:String,
    require:true,
  },
  isAdmin:{
    type:Boolean,
    require:true,
    unique:false,
  },
},
{
  timestamps:true
}
)

const User = mongoose.model("User", userSchema)

export default User;