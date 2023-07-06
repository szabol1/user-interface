const express = require("express")
const postModel = require("../models/posts")
const router = express.Router()


router
    .post('/create', async(req,res)=>{
        try{
            console.log(req.body)
            const post = await postModel.createPost(req.body.title, req.body.userId, req.body.content)
            res.send(post)
        }catch(error){
            res.status(401).send({message:error.message})
        }
    })
    .post('/getAll', async (req, res)=>{
        try{
            const post = await postModel.getUserAllPosts(req.body.userId)
            console.log('Fetched user posts:', post);
            res.send(post)
        }catch(error){
            res.status(401).send({message: error.message})
        }
    })
    .post('/getAllFollowed', async (req, res)=>{
        try{
            const post = await postModel.getFollowedUserPost(req.body.userId)
            res.send(post)
        }catch(error){
            res.status(401).send({message: error.message})
        }
    })

    .post('/edit', async (req, res)=>{
        try{
            const post = await postModel.editPost(req.body.id, req.body.content)
            res.send(post)
        }catch(error){
            res.status(401).send({message: error.message})
        }
    })
    .post('followedPosts', async(req,res)=>{
        try{
            const post = await postModel.getFollowedUserPost(req.body.userId)
            res.send(post)
        }catch(error){
            res.status(401).send({message: error.message})
        }
    })
    .delete('/delete', async (req,res)=>{
        try{
            await postModel.deletePost(req.body.id)
            res.send({success: "Note has been deleted"})
        }catch(error){
            res.status(401).send({message: error.message})
        }
    })
module.exports = router;