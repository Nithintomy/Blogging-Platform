import mongoose from 'mongoose'

const commentSchema = new mongoose.Schema({
    author:String,
    text:String
},{timestamps:true})


const Comment = mongoose.model('Comment',commentSchema)

export default Comment