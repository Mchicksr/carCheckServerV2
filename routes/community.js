import express from "express"
import { createCommunity, getCommunity } from "../controllers/community.js"
const router = express.Router()

router.get('/',getCommunity)
router.post('/',createCommunity)
export default router