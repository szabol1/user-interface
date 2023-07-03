const mongoose = require('mongoose')
const {Schema} = require("mongoose");
const user = require('../model/user')
const topicSchema = new mongoose.Schema({
    title:String,
    about: String,
    posts:[{type:Schema.Types.ObjectId, ref:'posts'}],
    creator: {type: Schema.Types.ObjectId, ref:'user'},
    followers: [{type:Schema.Types.ObjectId, ref: 'user'}]

})

const topic = mongoose.model("topic", topicSchema)
async function createTopic(title, about, userId){
    const newTopic = await topic.create({
        "title": title,
        "about": about,
        "creator": userId
    })
    return newTopic._doc;
}
async function editTopic(id,about,userId){
    const Topic = await topic.findById(id)

    if(Topic.creator.toString()!==userId){
        throw new Error('You are not authorized to edit this topic')
    } else{
        Topic.about = about;
    }

}

async function findTopic(id){
    return topic.findOne({"_id":id})
}


async function deleteTopic(id, userId){
    const foundTopic = await findTopic(id)

    console.log(foundTopic)

    if(foundTopic.creator.toString()!==userId){
        throw new Error('You are not authorized to edit this topic')
    } else{
        await topic.deleteOne({"_id": id})
    }
}

async function followTopic(id, userId){
    const Topic = await findTopic(id)

    console.log(Topic)

    Topic.followers.push(userId)

    await Topic.save();

    const User = await user.findOne(userId)

    User.topicsFollowed.push(Topic._id)
    await User.save();
}

