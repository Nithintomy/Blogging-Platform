import mongoose from "mongoose";
// import Comment from "./commentModel.js";


const blogPostSchema = new mongoose.Schema({
    title:String,
    content:String,
    category:{
        type:String,
        enum:["Tech","Travel","Food"]
    },
    createdAt: {
        type: Date,
        default: Date.now 
    },
    comments:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'comment'
    } ] 
})

const BlogPost =mongoose.model('BlogPost',blogPostSchema)

export default BlogPost