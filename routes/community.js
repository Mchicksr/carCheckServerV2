import express from "express"
import { createCommunity, getCommunity,createComRules } from "../controllers/community.js"
const router = express.Router()

router.get('/',getCommunity)
router.post('/',createCommunity)
router.post('/rules/:id',createComRules)

export default router