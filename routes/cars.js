import express from "express"
import auth from '../middleware/auth.js'
import { createCar, getCars, addViolation, getSafeList,resetViolation,verify, deleteCar,getCar,safe, violationList, safeList, updateVerify, updateSafeStatus,deleteCars,BulkCars } from "../controllers/cars.js"

const router = express.Router()

router.get('/',getCars)
router.get('/find/:id',getCar)
router.get('/safe',safe)
// router.get('/safel',getSafeList)
router.get('/safe/:id',safeList)
router.post('/',createCar)
router.patch('/safe/:id',updateSafeStatus)
router.patch('/safe/:id',updateVerify)
router.patch('/:id/violation',addViolation)
router.patch('/violations/:id',violationList)
router.patch('/:id/resetviolation', resetViolation)
router.patch('/:id/verify',auth,verify)
router.delete('/:id',deleteCar)
router.get('/multicars',BulkCars)
router.delete('/multicars/:id',deleteCars)

export default router