import mongoose from "mongoose";
// import Comment from "./commentModel.js";


const blogPostSchema = new mongoose.Schema({
    title:String,
    content:String,
    comments:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Comment'
    } ]
})

const BlogPost =mongoose.model('BlogPost',blogPostSchema)

export default BlogPost