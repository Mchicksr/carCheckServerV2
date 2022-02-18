import mongoose from 'mongoose'

const violationType = mongoose.Schema({
    violation_type: String,
    vCount: {type:Number,default:0},
    carLic: String,
    modified:{type:Date,default:new Date()},
    carId:{type:mongoose.Types.ObjectId, ref:'CarMessage'}
})

const ViolationTSchema = mongoose.model('violationType',violationType)

export default ViolationTSchema