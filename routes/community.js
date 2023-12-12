import express from "express"
import { createCommunity, getCommunity,createComRules,deleteCommunity,updateCommunityRules } from "../controllers/community.js"
const router = express.Router()

router.get('/',getCommunity)
router.post('/',createCommunity)
router.post('/rules/:id',createComRules)
router.delete('/:id',deleteCommunity)
router.patch('/updaterules/:id',updateCommunityRules)

export default router