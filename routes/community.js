import express from "express"
import { createCommunity, getCommunity,createComRules,deleteCommunity } from "../controllers/community.js"
const router = express.Router()

router.get('/',getCommunity)
router.post('/',createCommunity)
router.post('/rules/:id',createComRules)
router.delete('/:id',deleteCommunity)

export default router