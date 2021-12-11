import express from "express"
import { fetchPdf,createPdf } from "../controllers/pdf.js"
const router = express.Router()

router.get('/fetch-pdf',fetchPdf)
router.post('/create-pdf',createPdf)

export default router