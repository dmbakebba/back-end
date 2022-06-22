
const express =require('express') 
const router=express.Router()
const Service =require('../Model/serviceModel')

router.get('/',async(req,res)=>{
    const service=await Service.find({})

    res.status(200).json(service.map(c=> c.tojson()))

})
router.post('/',async (req,res)=>{
    const service=await Service.create({
        
    logo:req.body.log,
    heading:req.body.heading,
    text:req.body.text
})
const savedService=await service.save()
res.status(200).json(savedService)
})
module.exports=router
