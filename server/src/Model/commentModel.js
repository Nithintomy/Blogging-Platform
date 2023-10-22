import mongoose from 'mongoose'

const commentSchema = new mongoose.Schema({
    author:String,
    text:String
},{timestamps:true})


const Comment = mongoose.model('comment',commentSchema)

export default Comment   