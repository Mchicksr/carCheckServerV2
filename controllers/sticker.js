import express from 'express'
import mongoose from 'mongoose'
import StickerMessage from '../models/sticker.js'

const router = express.Router()


export const getSticker = async (req,res) => {
    try {
        const sticker = await StickerMessage.find()
        res.status(200).json(sticker)
    } catch (error) {
        res.status(404).json({message:error.message})
    }
}

export const sticker = async (req,res) => {
    const sticker = req.body
    const newStickerMessage = new StickerMessage({...sticker})
    try {
        await newStickerMessage.save()
        res.status(201).json(newStickerMessage)
    } catch (error) {
        res.status(409).json({message:error.message})
    }
}

export const deleteSticker = async (req,res) => {
    const { id } = req.params
    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No sticker with id: ${id}`)
    await StickerMessage.findByIdAndRemove(id)
    res.json({message: "Sticker deleted sucessfully"})
}

export default router;