//just a form with two inputs for now (not using topics yet) header, topic, content, will have an exit button and submit button
//will update users post history and topics posts in mongoDB
import React, {useContext, useState} from 'react'
import {fetchData} from "../../main";
import { DataContext } from '../../App';
function PostForm(){//so getting the userId is not working properly right now and Ive tried a lot of different ways of getting it

    const USER = JSON.parse(localStorage.getItem('user'));

    const [post, setPost] =  useState({//initial state sort of like a model
        title: '',
        userId: USER._id,
        content: ''
    })
    const{title, userId, content} = post

    const onChange = (e) => {
        console.log(e.target.name) // Check the name
        console.log(e.target.value)
        console.log(e.target.userId)//this is undefined
        setPost({...post, [e.target.name]: e.target.value})
    }//updater

    const onSubmit = (e) => {
        e.preventDefault()
        fetchData("/posts/create", {
                title, userId, content
            }
            , "POST"
        )
            .then((data) =>{
                if(!data.message){
                    console.log(data)
                    console.log(data.content)
                }
            })
            .catch((error)=>{
                console.log(error)
            })


    }
    return(
        <form onSubmit={onSubmit}>
            <div className="text-post">
                <div className="text-post-header">
                <label htmlFor="exampleFormControlInput1">Title</label>
                <input type="text" className="title" id="title" name = "title" onChange = {onChange} value = {title} />
                </div>
            <div className="text-post-content">
                <textarea type="text" className="content" id="content" name = "content" onChange={onChange} value = {content} rows="4"></textarea>
                <div className="text-post-footer">
            </div>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
            </div>
        </form>

    )
}
export default PostForm