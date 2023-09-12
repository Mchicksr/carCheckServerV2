import express from "express"
import { fetchPdf,createPdf,createCarLogPdf, fetchLogPdf } from "../controllers/pdf.js"
const router = express.Router()

router.get('/fetch-pdf',fetchPdf)
router.get('/fetch-log-pdf',fetchLogPdf)
router.post('/create-pdf',createPdf)
router.post('/create-car-log-pdf',createCarLogPdf)

export default router