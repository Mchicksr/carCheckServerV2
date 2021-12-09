import express from "express"
import auth from '../middleware/auth.js'
import { createCar, getCars, addViolation, resetViolation,verify, deleteCar } from "../controllers/cars.js"

const router = express.Router()

router.get('/',getCars)
router.post('/',createCar)
router.patch('/:id/violation',addViolation)
router.patch('/:id/resetviolation', resetViolation)
router.patch('/:id/verify',auth,verify)
router.delete('/:id',deleteCar)

export default router