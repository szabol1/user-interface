const express = require("express")
const postModel = require("../models/posts")
const router = express.Router()
router
    .post('/create', async(req,res)=>{
        try{
            const userId = req.user._id
            //const topicId = req.topic._id
            const post = await postModel.createPost(userId, req.body.contents, topicId)
            res.send(post)
        }catch(error){
            res.status(401).send({message:error.message})
        }
    })
    .post('/getAll', async (req, res)=>{
        try{
            const userId = req.user._id
            const post = await postModel.getAllPosts(userId)
            res.send(post)
        }catch(error){
            res.status(401).send({message: error.message})
        }
    })

    .post('/edit', async (req, res)=>{
        try{
            const post = await postModel.editPost(req.body.userId, req.body.id, req.body.contents)
            res.send(post)
        }catch(error){
            res.status(401).send({message: error.message})
        }
    })
    .delete('/delete', async (req,res)=>{
        try{
            await postModel.deletePost(req.body.userId, req.body.id)
            res.send({success: "Note has been deleted"})
        }catch(error){
            res.status(401).send({message: error.message})
        }
    })
module.exports = router;