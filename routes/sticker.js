import express from "express"
import auth from '../middleware/auth.js'
import {sticker,getSticker,deleteSticker} from '../controllers/sticker.js'

const router = express.Router()

router.get('/',getSticker)
router.post('/',sticker)
router.delete('/:id',deleteSticker)

export default router