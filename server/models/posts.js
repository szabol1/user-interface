const mongoose = require('mongoose')
const {Schema} = require("mongoose");
const User = require('../models/user');
const postSchema = new mongoose.Schema({
    title: String,
    userId: {type: Schema.Types.ObjectId, ref:'user'},
    content:String
})

const post = mongoose.model("post",postSchema)

async function createPost(title, userId, content) {
    const newPost = await post.create({
        "title": title,
        "userId": userId,
        "content": content
    })
    return newPost;
}
async function deletePost(id){
    await post.findByIdAndDelete(id);
}
async function editPost(id, content){
    await post.updateOne({"_id":id, "content":content})
}
async function getUserAllPosts(userId){
    const posts = await post.find({"userId": userId})
    return posts
}
async function getFollowedUserPost(userId){//get followed users posts
    const currentUser = await User.find(userId);

    if (!currentUser) {
        throw new Error('User not found');
    }

    const followedUsers = currentUser.following;

    const followedUserPosts = await post.find({ userId: { $in: followedUsers } });

    return followedUserPosts;

}
module.exports = {createPost, getUserAllPosts,editPost,deletePost, getFollowedUserPost}
