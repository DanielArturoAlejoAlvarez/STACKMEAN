'use strict'

const express=require('express')
const morgan=require('morgan')
const cors=require('cors')


const app=express()
const port=process.env.PORT || 3000

const { mongoose }=require('./database')
const api=require('./routes/employee.routes')

//MIDDLEWARES
app.use(morgan('dev'))
app.use(express.json())
app.use(cors({
    origin: 'http://127.0.0.1:4200'
}))

// app.get('/', (req,res)=>{
//     res.send('Hello World!');
// })
//app.use(require('./routes/employee.routes'))
app.use('/api/employees',api)

app.listen(port, ()=>{
    console.log(`Server running in port: ${port}`)
})