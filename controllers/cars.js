import express from 'express'
import mongoose from 'mongoose'

import CarMessage from '../models/cars.js'
// import { TaggedMessage } from '../models/cars.js';


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

export const findCars = async (req,res) => {
    const dates = req.body
    const {id} = req.params
    console.log('id',id)
    console.log('date',dates)
    console.log('param1', dates[0])
    console.log('param2', dates[1])
    const para1 = dates[0]
    const para2 = dates[1]
    const search = await CarMessage.where('community_id').equals(id).where('modified').gte(para1).where('modified').lte(para2)
    console.log(search)
    res.status(200).json(search)
}

export const getCollection = async (req,res) => {
    const commId = req.body
    const id = req.params
    console.log('param1', commId)
    console.log('param2', id)
    const search = await CarMessage.where('community_id').equals('637c445c0f3e3009ca5059e1')
    console.log(search)
    res.status(200).json(search)

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


export const updateSafeStatus = async (req,res) => {
    const safe = req.body
    const {id} = req.params;
    // const findId = 
    // console.log('id',id)
    // console.log('safe',safe)
        
        if(mongoose.Types.ObjectId.isValid(id)){
    
           const updatedStatus = await CarMessage.findByIdAndUpdate(id,safe,{new:true}) 
        res.status(200).json(updatedStatus)
        
        }else{
            res.status(400).json('fail')
        }
  

 
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

// new check and create safe list system
export const updateVerify = async (req,res) => {
    const verify = req.body
    const {id} = req.params;
    // const findId = 
    console.log('id',id)
    console.log('verify',verify)
    
    
        
        if(mongoose.Types.ObjectId.isValid(id)){
    
           const updatedStatus = await CarMessage.findByIdAndUpdate(id,verify,{new:true}) 
        res.status(200).json(updatedStatus)
        
        }else{
            res.status(400).json('fail')
        }
  

 
}

export const safeList = async (req,res) =>{
    const {id} = req.params;
    const safe = await CarMessage.where('safe').equals(1).where('community_id').equals(id)
    try {
        // console.log('safe',safe.community_id)
        // console.log('safe',safe)
        res.status(200).json(safe)
    } catch (error) {
        console.log('fail')
        res.status(400)
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

// New Violations system
// export const violationList = async (req,res) => {
//     //create a list of violations
//     const violationList = req.body;
//     console.log(violationList)
//     const {id} = req.params
//     try {
//         const update = await CarMessage.findById(id)
//         console.log('id',update)

//         await CarMessage.findByIdAndUpdate(id,{
//             $addToSet:{
//                 violations_list:violationList
//             }
//         })

//         res.status(200).json(violationList)
//     } catch (error) {
//         res.status(404).send(error.message)
//     }
// }
export const violationList = async (req,res) => {
    //create a list of violations
    const violationList = req.body;
    const {id} = req.params
    // const formatList = {"violation":violationList}
    
    const query = {'license_plate':id}
    // const newArr = violationList.violation_list.map(item => console.log(item))
    // console.log('new',newArr)
    try {
        // console.log('lp',query)
        // console.log('body',violationList)
        // const update = await CarMessage.findById(id)
        // console.log('id',update)

        await CarMessage.findOneAndUpdate(query,{
            // $addToSet:{
            //     violations_list:violationList
            // }
            $addToSet:{
                violations_list:violationList
            }
            // $addToSet:{
            //     reason:violationList
            // }
        })

        const updated =  await CarMessage.find(query)
        console.log('ans', updated)
        res.status(200).json(updated)
    } catch (error) {
        res.status(404).send(error.message)
    }
}



export const safe = async (req,res) => {
    try {
        const safe = await CarMessage.find({verified: 'verified'})
        // safe.save()
        res.status(200).json(safe)
    } catch (error) {
        res.status(404).json({message:error.message})
    }
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

export const BulkCars = async (req,res) => {
    try {
        const theTime = await CarMessage.where("modified").lte("2021-12-12T23:55:24.569Z")
        // const theTime = await CarMessage.find({modified:"2022-11-23T15:09:36.796Z"})
        console.log("theTime",theTime)
        res.status(200).json(theTime)
        
    } catch (error) {
        console.log(error)
        res.status(400)
    }
}
export const deleteCars = async (req,res) => {
    const {tmz} =req.params
   console.log(tmz)
        // const theTime = await CarMessage.where("modified").lte("2022-11-25T16:37:09.791Z")
        // const theTime = await CarMessage.deleteMany({modified:{$lte:"2022-11-25T16:37:09.791Z"}})
        const theTime = await CarMessage.deleteMany({modified:{$lte:"2021-12-12T23:55:24.569Z"}})
        console.log("theTime",theTime)
        res.status(200).json(theTime)
        
   
}

export default router;