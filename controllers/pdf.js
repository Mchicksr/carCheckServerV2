import express from 'express'
import pdf from 'html-pdf'
import pdfTemplate from '../FaxAuthForm.js'
import carLogTemplate from '../CarLog.js'
import {dirname} from 'path'
import { fileURLToPath } from 'url'
const router = express.Router()
const __dirname = dirname(fileURLToPath(import.meta.url))
export const fetchPdf = (req,res) => {
  
    res.sendFile(`${__dirname}/result.pdf`)

}
export const fetchLogPdf = (req,res) => {
  
    res.sendFile(`${__dirname}/log.pdf`)

}

export const createPdf = (req,res) => {
    pdf.create(pdfTemplate(req.body),{}).toFile(`${__dirname}/result.pdf`,(err)=>{
        if(err){
          res.send(Promise.reject());
        }
        res.send(Promise.resolve());
      })
}

export const createCarLogPdf = (req,res) => {
    pdf.create(carLogTemplate(req.body),{}).toFile(`${__dirname}/log.pdf`,(err)=>{
        if(err){
          console.log('err',err)
          res.send(Promise.reject());
        }
        console.log('success')
        res.send(Promise.resolve());
      })
}

export default router;