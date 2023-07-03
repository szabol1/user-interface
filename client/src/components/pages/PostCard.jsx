import React from 'react';
import {fetchData} from "../../main";
//here we are rendering actual posts as a card format
function Post({ title, postId, onDelete }) {
    const handleDelete = () => {
        fetchData('/delete', { id: postId }, 'DELETE')
            .then((data) => {
                console.log(data.success);
                onDelete(postId);
            })
            .catch((error) => {
                console.log(error.message);
            });
    };

    return (
        <div className="post">
            <h3>{title}</h3>
            <button onClick={handleDelete}>Delete</button>
        </div>
    );
}
export default Post;
