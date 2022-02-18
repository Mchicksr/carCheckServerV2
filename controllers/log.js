import express from 'express'
import pdf from 'html-pdf'
// import pdfTemplate from '../FaxAuthForm.js'
import logTemplate from '../Log.js'
import {dirname} from 'path'
import { fileURLToPath } from 'url'
const router = express.Router()
const __dirname = dirname(fileURLToPath(import.meta.url))

export const fetchLog = (req,res) => {
  
    res.sendFile(`${__dirname}/result2.pdf`)

}

export const createLog = (req,res) => {
    pdf.create(logTemplate(req.body),{}).toFile(`${__dirname}/result2.pdf`,(err)=>{
        if(err){
          res.send(Promise.reject());
        }
        res.send(Promise.resolve());
      })
}

export default router;