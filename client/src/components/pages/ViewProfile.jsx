import React, {useState} from 'react'
import Post from "./PostCard"
import PostForm from "./PostForm";
//mapping all the posts from user
//and have the post form to create a new post at top
function ViewProfile(prop){


    const [posts, setPosts] = useState([

    ]);

    const handleDeletePost = (postId) => {
        // Perform deletion logic using the post ID
        const updatedPosts = posts.filter((post) => post.id !== postId);
        setPosts(updatedPosts);
    };
    const username = prop

    return(
        <div>
            <h1></h1>
            <PostForm />
            {posts.map((post) => (
                <Post
                    title={post.title}
                    content = {post.content}
                    onDelete={handleDeletePost}
                />
            ))}
        </div>
    );

}
export default ViewProfile