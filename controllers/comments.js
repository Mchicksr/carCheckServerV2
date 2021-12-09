import express from 'express'

import CommentMessage from '../models/comments.js'

const router = express.Router()

export const getComments = async (req,res) => {
    try {
        const comment = await CommentMessage.find()
        res.status(200).json(comment)
    } catch (error) {
        res.status(404).json({message:error.message})
    }
}

export const createComments = async (req,res) => {
    const comment = req.body
    const newComment = new CommentMessage({...comment})

    try {
        await newComment.save()
        res.status(201).json(newComment)
    } catch (error) {
        res.status(409).json({message:error.message})
    }
}

export default router;