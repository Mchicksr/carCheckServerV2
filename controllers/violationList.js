import express from 'express'
import mongoose from 'mongoose'

import ViolationArrMessage from '../models/violation_arr.js'

const router = express.Router()
export const getViolationArr = async (req,res) =>{
    try {
        const violationArr = await ViolationArrMessage.find()
        res.status(200).json(violationArr)
    } catch (error) {
        res.status(404).json({message:error.message})
    }
}

export const createViolation = async (req,res) => {
    const violation = req.body
    const newViolation = new ViolationArrMessage(violation)
    console.log('violation',violation)
    try {
        await newViolation.save()
        res.status(201).json(newViolation)
    } catch (error) {
        res.status(409).json({message:error.message})
    }
}

export const deleteViolation = async (req,res) => {
    const {id} = req.params
    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No violation with that id')
    await ViolationArrMessage.findByIdAndRemove(id)
    res.json({message:'Violation deleted successfully'})
}

export const editViolation = async (req,res) => {
    const {id} = req.params
    const {violation} = req.body
    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No violation with that id')
    const updatedViolation = await ViolationArrMessage.findByIdAndUpdate(id,violation,{new:true})
    res.json(updatedViolation)
}