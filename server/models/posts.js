const mongoose = require('mongoose')
const {Schema} = require("mongoose");
const postSchema = new mongoose.Schema({
    userId: {type: Schema.Types.ObjectId, ref:'user'},
    contents:String,
    topicId: {type:Schema.Types.ObjectId, ref: 'topic'},
})

const post = mongoose.model("post",postSchema)

async function createPost(userId, contents,topicId) {
    const newPost = await post.create({
        "userId": userId,
        "contents": contents,
        "topicId": topicId
    })
    return newPost;
}
async function deletePost(id){
    await post.deleteOne({"_id":id})
}
async function editPost(userId, id, contents){
    await post.updateOne({"userId":userId, "_id":id, "contents":contents})
}
async function getAllPosts(userId){
    const posts = await post.find({"userId": userId})
    return posts
}
module.exports = {createPost, getAllPosts,editPost,deletePost}
