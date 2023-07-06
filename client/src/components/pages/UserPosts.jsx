//just getting user posts and then mapping them using userId
import React, {useEffect} from 'react';
import {fetchData} from "../../main";
import {useState} from "react";

const UserPosts = () =>{

    const USER = JSON.parse(localStorage.getItem('user'));
    const userId = USER._id


    const[userPosts, setUserPosts] = useState([])

    useEffect(()=>{
        async function fetchUserPosts(){
            try{
                const fetchedUserPosts = await fetchData('/posts/getAll', {userId}, 'POST')
                setUserPosts(fetchedUserPosts)
            } catch(error){
                console.log('Error', error)
            }
        }
        fetchUserPosts()
    },[userId]);

    return(
        <div className={"form-Wrapper"}>
            {userPosts.length === 0 ? (
                <p>No posts available</p>
            ) : (
                <ul>
                    {userPosts.map((userPost) => (
                        <li className={"userPosts"} key={userPost._id} >
                            {userPost.title}
                            <div></div>
                            {userPost.content}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );

}
export default UserPosts