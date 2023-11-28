import express from 'express'
import mongoose from 'mongoose'

import CarMessage from '../models/cars.js'
// import { TaggedMessage } from '../models/cars.js';


const router = express.Router();
export const getCars = async (req, res) => {
    try {
        const car = await CarMessage.find()
        res.status(200).json(car)
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}


export const getCar = async (req, res) => {
    const { id } = req.params;
    try {
        const car = await CarMessage.find({ license_plate: id })
        console.log('car',car)
        const findCar = CarMessage.exists({ license_plate: id })

        // console.log(await findCar)

        await findCar === true ? res.status(200).json(car) : res.status(404).send(`No post with id: ${id}`)




    } catch (error) {
        res.status(404).json({ message: error.message })

    }
}

export const findCars = async (req, res) => {
    const dates = req.body
    const { id } = req.params
    console.log('id', id)
    console.log('date', dates)
    

    const para1 = dates[0]
    const para2 = dates[1]
    const dateStr = para2;
const timeStr = '23:00:00'; // Represents 11 PM
// Combine date and time strings into a single string
const dateTimeStr = `${dateStr}T${timeStr}.000Z`;

// Create a Date object from the combined string
const dateTime = new Date(dateTimeStr);

// Convert the Date object to ISO 8601 format
const time2 = dateTime.toISOString();

console.log(time2);

    const search = await CarMessage.where('community_id').equals(id).where('modified').gte(para1).where('modified').lte(time2)
    console.log(search)
    res.status(200).json(search)
}
// export const findCars = async (req, res) => {
//     const dates = req.body
//     const { id } = req.params
//     console.log('id', id)
//     console.log('date', dates)
//     console.log('param1', dates[0])
//     console.log('param2', dates[1])
//     const para1 = dates[0]
//     const para2 = dates[1]
//     const search = await CarMessage.where('community_id').equals(id).where('modified').gte(para1).where('modified').lte(para2)
//     console.log(search)
//     res.status(200).json(search)
// }

export const getCollection = async (req, res) => {
    const commId = req.body
    const id = req.params
    console.log('param1', commId)
    console.log('param2', id)
    const search = await CarMessage.where('community_id').equals('637c445c0f3e3009ca5059e1')
    console.log(search)
    res.status(200).json(search)

}

export const createCar = async (req, res) => {
    const car = req.body;
    console.log('triggered',car)
    const { license_plate, community_id } = car;
    const newCarMessage = new CarMessage({ ...car });
  
    try {
      const result = await CarMessage.findOne({ license_plate, community_id }).exec();
      
      if (result) {
        // Both fields exist
        res.status(200).json({ message: 'Car already exists' });
      } else {
        // Either one or both fields do not exist
        await newCarMessage.save();
        res.status(201).json(newCarMessage);
      }
    } catch (error) {
        console.log('error',error)
      res.status(409).json({ message: error.message });
    }
  };


export const deletePost = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`)
    await CarMessage.findByIdAndRemove(id)
    res.json({ message: "Post deleted successfully." })
}


export const updateSafeStatus = async (req, res) => {
    const safe = req.body
    const { id } = req.params;


    if (mongoose.Types.ObjectId.isValid(id)) {

        const updatedStatus = await CarMessage.findByIdAndUpdate(id, safe, { new: true })
        res.status(200).json(updatedStatus)

    } else {
        res.status(400).json('fail')
    }



}

export const getSafeList = async (req, res) => {
    const { id } = req.params;
    try {
        const car = await CarMessage.find({ verified: id })
        console.log('car', car)
        const findCar = CarMessage.exists({ verified: id })

        console.log(wait, findCar)

        await findCar === true ? res.status(200).json(car) : res.status(404).send(`No post with id: ${id}`)


    } catch (error) {
        res.status(404).json({ message: error.message })

    }
}

// new check and create safe list system
export const updateVerify = async (req, res) => {
    const verify = req.body
    const { id } = req.params;
    // const findId = 
    console.log('id', id)
    console.log('verify', verify)



    if (mongoose.Types.ObjectId.isValid(id)) {

        const updatedStatus = await CarMessage.findByIdAndUpdate(id, verify, { new: true })
        res.status(200).json(updatedStatus)

    } else {
        res.status(400).json('fail')
    }



}

export const safeList = async (req, res) => {
    const { id } = req.params;
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

export const addViolation = async (req, res) => {
    try {
        const update = await CarMessage.findById(req.params.id)
        Object.assign(update, req.body)
        update.save()
        res.send({ data: update })
    } catch (error) {

    }
}

export const resetViolation = async (req, res) => {
    const { id } = req.params
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`)
    const car = await CarMessage.findById(id)
    const updatedViolation = await CarMessage.findByIdAndUpdate(id, { violations: 0 }, { new: true })

    res.json(updatedViolation)

}


export const violationList = async (req, res) => {
    const violationList = req.body;
    console.log('clickViolationList', violationList)
    const { id } = req.params
    const query = { 'license_plate': id }
    console.log('id', id)
    console.log('violation', violationList )
    try {
        await CarMessage.findOneAndUpdate(query, {
         
            $addToSet: {
                violations_list: violationList
            }
           
        })

        const updated = await CarMessage.find(query)
        res.status(200).json(updated)
    } catch (error) {
        res.status(404).send(error.message)
    }
}



// console.log('violation', vName.violation)
export const removeViolation = async (req, res) => {
    const {id} = req.params
    // const id  = '641f6d9e089643c4891d6590'
    const vName = req.body
    const VnameString = vName.violation
    console.log('id', id)
    console.log('req', vName)
   try {
    const indexToRemove = vName.index
    console.log('ll',indexToRemove)
    //   const remove =  await CarMessage.findOneAndUpdate(
    //         { _id: id },
    //         { $unset: { [`violations_list.${indexToRemove}`]: 1 } },
            
    //     )
    //     const restore = await CarMessage.updateOne(
    //         {_id:id},
    //         {$pull: { violations_list: null }},
    //         (err, result) => {
    //             console.log('click2')
    //             if (err) {
    //               console.error('Error removing null values:', err);
    //             } else {
    //               console.log('Null values removed successfully:', result);
    //             }
    //           }
    //     )
    //         res.status(200).json(restore);
    const remove = await CarMessage.findOneAndUpdate(
        { _id: id },
        { $unset: { [`violations_list.${indexToRemove}`]: 1 } }
    );

    CarMessage.updateOne(
        { _id: id },
        { $pull: { violations_list: null } },
        (err, restore) => {
            if (err) {
                console.error('Error removing null values:', err);
                res.status(500).json({ error: 'Error occurred' });
            } else {
                console.log('Null values removed successfully:', remove);
                res.status(200).json(remove);
            }
        }
    );
   } catch (error) {
    console.log('no')
     res.status(404).send(error.message)
   }

       
}


export const safe = async (req, res) => {
    try {
        const safe = await CarMessage.find({ verified: 'verified' })
        // safe.save()
        res.status(200).json(safe)
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

export const verify = async (req, res) => {
    const { id } = req.params
    if (!req.userId) {
        return res.json({ message: "unauthenticated" })
    }
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No car with id: ${id}`)
    const car = await CarMessage.findById(id)
    const index = car.verified.findIndex((id) => id === String(req.userId))
    if (index === -1) {
        car.verified.push(req.userId)
    } else {
        car.verified = car.verified.filter((id) => id !== String(req.userId))
    }
    const updatedCar = await CarMessage.findByIdAndUpdate(id, car, { new: true })
    res.status(200).json(updatedCar)
}


export const addCarImage = async (req, res) => {
    const { id } = req.params
    const { car_image } = req.body
    console.log('image', car_image)
    console.log("lp",id)
    const query = { 'license_plate': id }
    try {
        await CarMessage.findOneAndUpdate(query, {
            $addToSet: {
                car_image: car_image
            }
        })
        const updated = await CarMessage.find(query)
        const completeUpdate = updated.map((item) => item.car_image)
        console.log('updated', updated)
        console.log('updated_CarImage', completeUpdate)
        res.status(200).json(completeUpdate)
    } catch (error) {
        res.status(404).send(error.message)
    }
}




// //////////////////////////////////////////
// ////////////////Admin/////////////////////
// /////////////////////////////////////////



export const deleteCar = async (req, res) => {
    const { id } = req.params
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No car with id: ${id}`)
    await CarMessage.findByIdAndDelete(id)
    res.json({ message: "Car deleted successfullt" })

}

export const BulkCars = async (req, res) => {
    try {
        const theTime = await CarMessage.where("modified").lte("2023-03-24T13:40:19.595+00:00")
        // const theTime = await CarMessage.find({modified:"2022-11-23T15:09:36.796Z"})
        console.log("theTime", theTime)
        res.status(200).json(theTime)

    } catch (error) {
        console.log(error)
        res.status(400)
    }
}
export const deleteCars = async (req, res) => {
    const { tmz } = req.params
    console.log(tmz)
    // const theTime = await CarMessage.where("modified").lte("2022-11-25T16:37:09.791Z")
    // const theTime = await CarMessage.deleteMany({modified:{$lte:"2022-11-25T16:37:09.791Z"}})
    const theTime = await CarMessage.deleteMany({ modified: { $lte: "2023-05-29T03:56:05.912+00:00" } })
    console.log("theTime", theTime)
    res.status(200).json(theTime)


}

export const updateSchema = async (req,res) => {
    try {
        
        CarMessage.updateMany({}, { $set: { car_image: [] } }, (err, result) => {
            if (err) {
              console.error(err);
              res.status(400)
            } else {
              console.log(`${result.nModified} documents updated`);
              res.status(200).json(result)
            }
          });
    } catch (error) {
        conosle.log(error)
        res.status(400)
    }
        
    }

export default router;