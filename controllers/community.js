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
    const query = { 'community': id }
   const check = await  CommunityMessage.exists(query)
    // console.log('check',check)
    try {
        if(check){

            const newRules = await CommunityMessage.findOneAndUpdate(query, {
                $addToSet: {
                    rules: rules
                }
            })
            // console.log('newrules',newRules)
            res.status(200).json(newRules)
        }else{
           res.send('there is no community with that name')

        }

    } catch (error) {
        res.status(400).json({ message: error.message })
    }


}

export const deleteCommunity = async (req, res) => {
    const { id } = req.params
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

    await CommunityMessage.findByIdAndRemove(id);

    res.json({ message: "Post deleted successfully." });
}

// export const updateCommunityRules = async (req,res) => {
//     const {id} = req.params
//     const newRulesArray = req.body
//     await CommunityMessage.findOneAndUpdate(
//         { 'communities._id': id },
//         { $set: { 'communities.$.rules': newRulesArray } },
//         { new: true },
//         (err, updatedDocument) => {
//           if (err) {
//             console.error(err);
//             // Handle error
//           } else {
//             console.log(updatedDocument);
//             res.status(200).json(updatedDocument)
//             // Handle success
//           }
//         }
//       );
// }

export const updateCommunityRules = async (req, res) => {
    const { id } = req.params;
    const newRulesArray = req.body;
    console.log('id',id)
    console.log('newr',newRulesArray)

    try {
       
        const updatedDocument = await CommunityMessage.findByIdAndUpdate(id,newRulesArray,{new:true})
        console.log(updatedDocument);
        res.status(200).json(updatedDocument);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

export default router;