import mongoose from 'mongoose'


const carSchema = mongoose.Schema({
    license_plate: String,
    car_make: String,
    car_model:String,
    violations:{type: Number, default: 0},
    verified:{type:[String],default:[]},
    sticker:[{type: mongoose.Schema.Types.ObjectId, ref:'sticker'}],
    modified: {type: Date, default: new Date()},
    commments: [{type: mongoose.Schema.Types.ObjectId, ref:'comment'}],
    community_id: String,
    color: String,
    car_address:String

})

const CarMessage = mongoose.model('CarMessage',carSchema)

export default CarMessage