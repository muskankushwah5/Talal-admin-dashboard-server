import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
   name: {
    type : String
   },

   email: {
    type : String
   },
   msg: {
    type : String
   },
    createdAt: {
        type: Date,
        default: Date.now, 
    },
})

const User = mongoose.model('Users',userSchema);

export default User;