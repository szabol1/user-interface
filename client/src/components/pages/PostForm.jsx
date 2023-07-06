import React, { useState } from 'react';
import { fetchData } from '../../main';
import { DataContext } from '../../App';


function PostForm() {
    const USER = JSON.parse(localStorage.getItem('user'));

    const [post, setPost] = useState({
        title: '',
        userId: USER._id,
        content: '',
    });
    const { title, userId, content } = post;

    const onChange = (e) => {
        setPost({ ...post, [e.target.name]: e.target.value });
    };

    const onSubmit = (e) => {
        e.preventDefault();
        fetchData('/posts/create', { title, userId, content }, 'POST')
            .then((data) => {
                if (!data.message) {
                    console.log(data);
                    console.log(data.content);
                }
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <form onSubmit={onSubmit} className="post-form-container">
            <div className="form-group">
                <label htmlFor="title">Title</label>
                <input type="text"  className="form-control"  id="title" name="title" onChange={onChange} value={title}/>
            </div>
            <div className="form-group">
                <label htmlFor="content">Content</label>
                <textarea className="form-control" id="content" name="content" onChange={onChange} value={content} rows="4"></textarea>
            </div>
            <button type="submit" className="btn btn-primary">
                Submit
            </button>
        </form>
    );
}

export default PostForm;

