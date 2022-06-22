const cors =require('cors')
const express=require('express')
const app= express()
const router =require ('./Controller/serviceController')
const mongoose=require('mongoose')
const PORT=5000
const mongoURI='mongodb://127.0.0.1/services'
mongoose
.connect(mongoURI)
.then(()=>{
    console.log(`connected to mongoDB ${mongoURI}`)
})
.catch(error=>{
    console.log('error connecting to DB', error.message)
})

app.use(cors())
app.use(express.json())
app.use('/api/services',router)


app.listen(PORT,()=>{
console.log("server is running at port 5000")
})