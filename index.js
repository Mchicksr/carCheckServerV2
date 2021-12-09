import express from "express";
import bodyParser from "body-Parser"
import mongoose from 'mongoose'
import cors from 'cors'
import dotenv from 'dotenv'
import carsRoutes from './routes/cars.js'
import communityRoutes from './routes/community.js'
import commentsRoutes from './routes/comments.js'
import usersRouter from './routes/users.js'
import stickerRouter from './routes/sticker.js'

const app = express()
dotenv.config()

app.use(bodyParser.json({limit:"30mb",extended:true}))
app.use(bodyParser.urlencoded({limit:'30mb',extended:true}))
app.use(cors());


app.use('/community',communityRoutes)
app.use('/cars',carsRoutes)
app.use('/comments',commentsRoutes)
app.use('/user', usersRouter)
app.use('/sticker',stickerRouter)
app.get('/',(req,res)=>{
    res.send('car-check is up!')
})
const PORT = process.env.PORT || 8000
mongoose.connect(process.env.CONNECTION_URL,{useNewUrlParser:true,useUnifiedTopology:true})
    .then(() => app.listen(PORT,() => console.log(`Server running on port: ${PORT}`)))
    .catch((error) => console.log('no good',error))