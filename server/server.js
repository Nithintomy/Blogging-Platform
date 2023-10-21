import express from 'express'
import './src/Connection/connection.js'
import cors from 'cors'
import blogRoutes from './src/Routes/blogRoutes.js';




const app =express()


const PORT = process.env.PORT || 5000;


app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use('/api',blogRoutes)

app.listen(PORT,(()=>{
    console.log(`Server is Running on Port ${PORT}` )

}))