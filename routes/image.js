import express from "express"
import { getImage,createImage } from "../controllers/image.js"

 const router = express.Router()

router.get('/',getImage)
router.post('/',createImage)

 export default router