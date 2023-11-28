import express from "express";
// import bodyParser from "body-Parser"
import mongoose from 'mongoose'
import cors from 'cors'
import dotenv from 'dotenv'
import carsRoutes from './routes/cars.js'
import communityRoutes from './routes/community.js'
import commentsRoutes from './routes/comments.js'
import usersRouter from './routes/users.js'
import stickerRouter from './routes/sticker.js'
import violationRouter from './routes/violation_type.js'
import pdfRouter from './routes/pdf.js'
import logRouter from './routes/log.js'
import imageRouter from './routes/image.js'
import userRouter from './Authentication/googleAuth.js'
import editDatabase from './controllers/database.js'
import violationArr from './routes/violationList.js'

const app = express()
dotenv.config()

app.use(express.json({limit:"30mb",extended:true}))
app.use(express.urlencoded({limit:'30mb',extended:true}))
app.use(cors());


app.use('/community',communityRoutes)
app.use('/cars',carsRoutes)
app.use('/comments',commentsRoutes)
app.use('/user', usersRouter)
app.use('/sticker',stickerRouter)
app.use('/violation',violationRouter)
app.use('/violationArr',violationArr)
app.use('/',pdfRouter)
app.use('/',logRouter)
app.use('/image',imageRouter)
app.use('/',userRouter)
app.use('/', editDatabase)
app.get('/',(req,res)=>{
    res.send('car-check is up!')
})
const PORT = process.env.PORT || 8000
mongoose.connect(process.env.CONNECTION_URL,{useNewUrlParser:true,useUnifiedTopology:true})
    .then(() => app.listen(PORT,() => console.log(`Server running on port: ${PORT}`)))
    .catch((error) => console.log('no good',error))