import express from 'express'
import ImageMessage from '../models/image.js'

const router = express.Router()

export const getImage = async (req,res) => {
    try {
        const ImageMessages = await ImageMessage.find()
        res.status(200).json(ImageMessages)
    } catch (error) {
        res.status(404).json({message:error.message})
    }
}

export const createImage = async (req,res) => {
    const image = req.body
    const newImageMessage = new ImageMessage({...image})

    try {
        await newImageMessage.save()
        res.status(201).json(newImageMessage)
    } catch (error) {
        res.status(409).json({message:error.message})
    }
}

export default router;