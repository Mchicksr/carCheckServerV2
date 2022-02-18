import express from "express"
import { fetchLog,createLog } from "../controllers/log.js"
const router = express.Router()

router.get('/fetch-log',fetchLog)
router.post('/create-log',createLog)

export default router