import mongoose from 'mongoose'

const stickerSchema = mongoose.Schema({
    sticker:{Type:String},
    modified:{type: Date, default:new Date()},
    carId:{type: mongoose.Types.ObjectId, ref:'CarMessage'}
})

const StickerSchema = mongoose.model('sticker',stickerSchema)

export default StickerSchema