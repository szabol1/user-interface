const mongoose = require('mongoose')
const {Schema} = require("mongoose")
const bcrypt = require('bcryptjs')
const userSchema = new mongoose.Schema({
    email: {type: String, required: true},
    username: {type : String, required: true, unique: true},
    password: {type: String, required: true},
    followers: [String],
    following: [String],
    topicsFollowed: [{type:Schema.Types.ObjectId, ref: 'topic'}]
})

const user = mongoose.model("user", userSchema);
async function register(email,username, password){
    const User = await getUser(username)
    if(User) throw Error("username already taken")

    const salt = await bcrypt.genSalt(10)
    const hashed = await bcrypt.hash(password,salt);

    const newUser = await user.create({
        "email":email,
        "username": username,
        "password":hashed,

    })
    return newUser._doc
}

async function updatePassword(id, password){
    const pass = await user.updateOne({"_id": id}, {$set: {password: password}})
    return pass;
}

async function deleteUser(id){
    await user.deleteOne({"_id":id})
}

async function getUser(username){
    return user.findOne({"username": username});
}
async function login(username, password){
    const User = await getUser(username);
    if(!User) throw Error('user does not exist');


    const match = await bcrypt.compare(password, User.password)

    if(!match){
        console.log("wrong password");
        throw Error("wrong password");
    }else{
        console.log("success")
    }

    return User._doc
}
async function getUsername() {
    const user = await user.findOne()
    return user.username;
}

async function getUserId() {
    const user = await user.findOne()
    return user._id
}

async function displayFollowedTopics(username){
    const User = await getUser(username)

    return User.topicsFollowed
}


module.exports = {login, register, deleteUser, updatePassword, getUsername, getUserId, getUser}