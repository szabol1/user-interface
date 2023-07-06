import React, {useState} from 'react'
import Post from "./PostCard"
import PostForm from "./PostForm";
import UserPosts from "./UserPosts";

//mapping all the posts from user with UserPosts
//and have the post form to create a new post at top
function ViewProfile(prop){

    const USER = JSON.parse(localStorage.getItem('user'));


    const [posts, setPosts] = useState([

    ]);
    const handleDeletePost = (postId) => {

        const updatedPosts = posts.filter((post) => post.id !== postId);
        setPosts(updatedPosts);
    };
    const username = prop

    return(
        <div>
            <h1 className={"form-Wrapper"}>{USER.username}</h1>
            <PostForm />
            <div>
                <UserPosts />
            </div>
        </div>

    );

}
export default ViewProfile