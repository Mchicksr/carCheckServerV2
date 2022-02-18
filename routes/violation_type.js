import express from "express"
import { getViolation,addViolation,deleteViolation } from "../controllers/violation_type.js"

const router = express.Router()

router.get('/',getViolation)
router.post('/',addViolation)
router.delete('/:id',deleteViolation)

export default router