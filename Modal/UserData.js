import mongoose from "mongoose";

const userDataSchema = new mongoose.Schema({
   name: {
    type : String,
    required : true
   },

   email: {
    type : String
   },
   password : {
    type : String,
    required : true
   },
   createdAt: {
    type: Date,
    default: Date.now, 
},
})

const UserData = mongoose.model('UserData',userDataSchema);

export default UserData;