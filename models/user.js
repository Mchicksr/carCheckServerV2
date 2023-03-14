import mongoose from 'mongoose'

const userSchema = mongoose.Schema({
    iss:String,
    sub:String,
    email:String,
    email_verified:Boolean,
    azp:String,
    name:String,
    picture:String,
    given_name:String,
    family_name:String,
    ait:Number,
    exp:Number,
    jti:String

})

const UserMessage = mongoose.model('UserMessage',userSchema)

export default UserMessage