import mongoose from "mongoose";

const boxSchema = new mongoose.Schema({
   main_type: {
    type : String
   },

   sub_type: {
    type : String
   },
   img: {
    type : String
   },
   data: {
    type : String
   },
   
   icon1_data: {
    type : String
   },
   icon2_data : {
      type : String
   },
    createdAt: {
        type: Date,
        default: Date.now, 
    },
})

const box = mongoose.model('Box',boxSchema);

export default box;