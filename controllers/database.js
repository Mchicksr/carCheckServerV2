import express from 'express'
import CarMessage from '../models/cars.js'

const router = express.Router()

const updateToUppercase = async () =>{
    const check =  await CarMessage.updateMany(
          {},
          [{$set : {license_plate : {$toUpper: "$license_plate"}}}]
      )
  
      return check
  }
//   updateToUppercase()

  export default router