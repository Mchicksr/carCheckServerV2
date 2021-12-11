import express from 'express'
import pdf from 'html-pdf'
import pdfTemplate from '../FaxAuthForm.js'
import {dirname} from 'path'
import { fileURLToPath } from 'url'
const router = express.Router()
const __dirname = dirname(fileURLToPath(import.meta.url))
export const fetchPdf = (req,res) => {
  
    res.sendFile(`${__dirname}/result.pdf`)

}

export const createPdf = (req,res) => {
    pdf.create(pdfTemplate(req.body),{}).toFile(`${__dirname}/result.pdf`,(err)=>{
        if(err){
          res.send(Promise.reject());
        }
        res.send(Promise.resolve());
      })
}

export default router;