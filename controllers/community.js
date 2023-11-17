import express from 'express'
import mongoose from 'mongoose'
import CommunityMessage from '../models/community.js'


const router = express.Router()

export const getCommunity = async (req, res) => {
    try {
        const CommunityMessages = await CommunityMessage.find()
        res.status(200).json(CommunityMessages)
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

export const createCommunity = async (req, res) => {
    const community = req.body

    const newCommunityMessage = new CommunityMessage({ ...community })

    try {
        await newCommunityMessage.save()
        res.status(201).json(newCommunityMessage)
    } catch (error) {
        res.status(409).json({ message: error.message })
    }
}

export const createComRules = async (req, res) => {
    const rules = req.body
    const { id } = req.params
    // console.log(id)
    const query = { 'community': id }
    // console.log(query)
   const check = await  CommunityMessage.exists(query)
    console.log('check',check)
    try {
        if(check){

            const newRules = await CommunityMessage.findOneAndUpdate(query, {
                $addToSet: {
                    rules: rules
                }
            })
            console.log('newrules',newRules)
            res.status(200).json(newRules)
        }else{
           res.send('there is no community with that name')

        }

    } catch (error) {
        res.status(400).json({ message: error.message })
    }





    // try {
    //     if(mongoose.Types.ObjectId.isValid(id)){
    //         const newRules =  await CommunityMessage.findByIdAndUpdate(id,{
    //             $addToSet:{
    //                 rules:rules
    //             }
    //         })
    //         console.log(newRules)
    //         res.status(200).json(rules)
    //     } else {
    //        res.send('there is no community with that Id')
    //     }
    // } catch (error) {
    //     res.status(400).json({message:error.message})
    // }
}

export const deleteCommunity = async (req, res) => {
    const { id } = req.params
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

    await CommunityMessage.findByIdAndRemove(id);

    res.json({ message: "Post deleted successfully." });
}


export default router;