import express from 'express'
import { getViolationArr, createViolation,deleteViolation, editViolation } from '../controllers/violationList.js'

const router = express.Router()

router.get('/',getViolationArr)
router.post('/',createViolation)
router.delete('/:id',deleteViolation)
router.patch('/:id',editViolation)

export default router