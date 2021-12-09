import mongoose from 'mongoose'

const commentSchema = mongoose.Schema({
    name:String,
    content:String,
    carId: {type: mongoose.Schema.Types.ObjectId, ref:'CarMessage'},
    modified:{type: Date, default:new Date()}

});

const CommentSchema = mongoose.model('comment',commentSchema)

export default CommentSchema