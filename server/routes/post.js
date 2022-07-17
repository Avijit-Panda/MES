const express=require('express')
const router =express.Router()
const mongoose = require('mongoose')

router.post('/createpost',(req,res)=>{
    const{title,body}=req.body
    if(!title || !body){
        return res.status(422).json({error:"add all fields"})
    }

    res.send("ok")
})

module.exports= router