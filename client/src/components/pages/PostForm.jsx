//just a form with two inputs for now (not using topics yet) header, topic, content, will have an exit button and submit button
//will update users post history and topics posts in mongoDB
import React, {useState} from 'react'
import {fetchData} from "../../main";
function PostForm({prop}){
    const [post, setPost] =  useState({//initial state sort of like a model
        title: '',
        userId: prop,
        content: ''
    })
    const{title, userId, content} = post

    const onChange = (e) => {
        console.log(e.target.name) // Check the name
        console.log(e.target.value)
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
                <div className ="Post-form">
                <label htmlFor="exampleFormControlInput1">Title</label>
                <input type="text" className="title" id="title" name = "title" onChange = {onChange} value = {title} />
                </div>
            <div className="form-group">
                <textarea type="text" className="content" id="content" name = "content" onChange={onChange} value = {content} rows="4"></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    )
}
export default PostForm