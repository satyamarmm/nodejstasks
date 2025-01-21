
let models=require("../models/model3.js")


exports.getUsers=async(req,res)=>{
    try{
        let data=await models.getUsers()
        res.send(data)
    }catch(err){
        res.send(err)
    }
}

exports.createUser=async(req,res)=>{
   try{
    const userData = req.body;
    let data=await models.createUser(userData)
    res.send(data)
   }catch(err){
    res.send(err)
   }
}
