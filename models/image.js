import mongoose from 'mongoose'

const imageSchema = mongoose.Schema({
    selectedFile:String,
})

const ImageMessage = mongoose.model('ImageMessage',imageSchema)

export default ImageMessage