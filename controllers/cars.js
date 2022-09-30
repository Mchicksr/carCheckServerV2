import express from 'express'
import mongoose from 'mongoose'

import CarMessage from '../models/cars.js'

const router = express.Router();
export const getCars = async (req,res) => {
    try {
        const car = await CarMessage.find()
        res.status(200).json(car)
    } catch (error) {
        res.status(404).json({message:error.message})
    }
}

export const getCar = async (req,res) => {
    const {id} = req.params;
    try {
        const car = await CarMessage.find({license_plate : id})
        // console.log('car',car)
        const findCar = CarMessage.exists({license_plate : id})

        // console.log(await findCar)

        await findCar === true ? res.status(200).json(car) : res.status(404).send(`No post with id: ${id}`)


        

    } catch (error) {
        res.status(404).json({message:error.message})

    }
}

export const createCar = async (req,res) => {
    const car = req.body
    const newCarMessage = new CarMessage({...car})

    try {
        await newCarMessage.save();
        res.status(201).json(newCarMessage)
    } catch (error) {
        res.status(409).json({message:error.message})
    }
}

export const deletePost = async (req,res) => {
    const {id} =req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`)
    await CarMessage.findByIdAndRemove(id)
    res.json({message: "Post deleted successfully."})
}

export const getSafeList = async (req,res) => {
    const {id} = req.params;
    try {
        const car = await CarMessage.find({verified : id})
        console.log('car',car)
        const findCar = CarMessage.exists({verified : id})

        console.log(wait, findCar)

        await findCar === true ? res.status(200).json(car) : res.status(404).send(`No post with id: ${id}`)


        

    } catch (error) {
        res.status(404).json({message:error.message})

    }
}



// export const addViolation = async (req,res) => {
//     const {id} = req.params
//     if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`)
//     const car = await CarMessage.findById(id)
//     console.log('check',car.violations)

//     const updatedViolation = await CarMessage.findByIdAndUpdate(id,{violations:car.violations + 1},{new: true})

//     res.json(updatedViolation)
    
// }

export const addViolation = async (req,res) => {
    try {
        const update = await CarMessage.findById(req.params.id)
        Object.assign(update,req.body)
        update.save()
        res.send({data:update})
    } catch (error) {
        
    }
}

export const resetViolation = async (req,res) => {
    const {id} = req.params
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`)
    const car = await CarMessage.findById(id)
    const updatedViolation = await CarMessage.findByIdAndUpdate(id,{violations:0},{new: true})

    res.json(updatedViolation)
    
}

export const verify = async (req,res) => {
    const {id} = req.params
    if(!req.userId) {
        return res.json({message: "unauthenticated"})
    }
    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No car with id: ${id}`)
    const car = await CarMessage.findById(id)
    const index = car.verified.findIndex((id) => id === String(req.userId))
    if(index === -1){
        car.verified.push(req.userId)
    } else {
        car.verified = car.verified.filter((id) => id !== String(req.userId))
    }
    const updatedCar = await CarMessage.findByIdAndUpdate(id,car,{new:true})
    res.status(200).json(updatedCar)
}

export const deleteCar = async (req,res) => {
    const {id} = req.params
    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No car with id: ${id}`)
    await CarMessage.findByIdAndDelete(id)
    res.json({message:"Car deleted successfullt"})

}

export default router;