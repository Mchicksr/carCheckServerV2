import express from 'express'
import mongoose from 'mongoose'
import CommunityMessage from '../models/community.js'


const router = express.Router()

export const getCommunity = async (req,res) => {
    try {
        const CommunityMessages = await CommunityMessage.find()
        res.status(200).json(CommunityMessages)
    } catch (error) {
        res.status(404).json({message:error.message})
    }
}

export const createCommunity = async (req,res) => {
    const community = req.body

    const newCommunityMessage = new CommunityMessage({...community})

    try {
        await newCommunityMessage.save()
        res.status(201).json(newCommunityMessage)
    } catch (error) {
        res.status(409).json({message:error.message})
    }
}

export default router;