const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    username: {type : String, required: true, unique: true},
    password: {type: String, required: true},
    email: {type: String, required: true},
    followers: [String],
    following: [String],
    topics: [String]
})

const user = mongoose.model("user", userSchema);
async function register(username, password,email){
    const User = await getUser(username)
    if(User) throw Error("username already taken")

    const newUser = await user.create({
        username: username,
        password:password,
        email:email
    })
    return newUser
}

async function updatePassword(id, password){
    const user = await user.updateOne({"_id": id}, {$set: {password: password}})
    return user;
}

async function deleteUser(id){
    await user.deleteOne({"_id":id})
}

async function getUser(username){
    return user.findOne({"username": username});
}
async function login(username, password){
    const user = await getUser(username);
    if(!user) throw Error('user does not exist');
    if(user.password!=password) throw Error("wrong password")

    return user._doc;
}
module.exports = {login, register, deleteUser, updatePassword}