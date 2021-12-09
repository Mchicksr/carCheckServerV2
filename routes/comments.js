import express from "express"
import { createComments, getComments } from "../controllers/comments.js"

const router = express.Router()

router.get('/',getComments)
router.post('/',createComments)

export default router