import express from 'express'
import mongoose from 'mongoose'
import ViolationTMessage from '../models/violation_type.js'

const router = express.Router()

export const getViolation = async (req,res) => {
    try {
        const violation = await ViolationTMessage.find()
        res.status(200).json(violation)
    } catch (error) {
        res.status(404).json({message:error.message})
    }
}

export const addViolation = async (req,res) => {
    const violation = req.body
    const newViolation = new ViolationTMessage({...violation})

    try {
        await newViolation.save()
        res.status(201).json(newViolation)
    } catch (error) {
        res.status(409).json({message:error.message})
    }
}

export const deleteViolation = async (req,res) => {
    const { id } = req.params
    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No violation type with id: ${id}`)
    await ViolationTMessage.findByIdAndRemove(id)
    res.json({message:"Violation Type deleted sucessfully"})
}