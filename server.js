const express = require('express')
const mongoose = require('mongoose')
const user = require('./models/userModels')
const dotenv = require('dotenv')
dotenv.config()
mongoose.connect(process.env.URI).then(res=>{
    console.log("connected sucessfully")
    app.listen(process.env.PORT || 8000, (err)=>{
        if(err) console.log(err)
    })
}).catch((err)=>{
    console.log(err)
})
const app = express()

app.get("/", (req, res) => {
    res.send("api running")
})

