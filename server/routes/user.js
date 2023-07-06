const express = require("express")
const userModel = require("../models/user")
const router = express.Router()

router
    .post('/login', async(req,res)=>{
        try{
            const user = await userModel.login(req.body.username,req.body.password)
            console.log("route sent")
            res.send({...user,password:undefined})
        }catch(error){
            res.status(401).send({message:error.message})
        }
    })
    .post('/register', async (req, res)=>{
        try{
            const user = await userModel.register(req.body.email, req.body.username, req.body.password)
            res.send({user,password:undefined})
        }catch(error){
            res.status(401).send({message: error.message})
        }
    })

    .post('/update', async (req, res)=>{
        try{
            const user = await userModel.updatePassword(req.body.id, req.body.password)
            res.send({...user,password:undefined})
        }catch(error){
            res.status(401).send({message: error.message})
        }
    })
    .delete('/delete', async (req,res)=>{
        try{
            const user = await userModel.deleteUser(req.body.id)
            res.send({success: "Account has been deleted"})
        }catch(error){
            res.status(401).send({message: error.message})
        }
    })
    .get('/getUser', async (req,res)=>{
        try{
            const user = await userModel.getUser(req.body)
            res.send({user})
        }catch(error){
            res.status(401).send({message: error.message})
        }
    })

module.exports = router;