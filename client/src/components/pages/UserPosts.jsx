//just getting user posts and then mapping them using userId
import React, {useEffect} from 'react';
import { fetchData} from "../../main";
import {useState} from "react";

const UserPosts = () =>{

    const[userId, setUserId] = useState('')


    useEffect(()=>{
        async function fetchUserData(){
        try{
            const fetchedUserId = await fetchData('/posts/getUserId', {}, 'POST')
            setUserId(fetchedUserId);
        } catch(error){
            console.log('Error', error)
        }
    }
        fetchUserData()
    },[])


    const[userPosts, setUserPosts] = useState('')
    useEffect(()=>{
        async function fetchUserPosts(){
            try{
                const fetchedUserId = await fetchData('/posts/getUserAllPosts', {userId}, 'POST')

            } catch(error){
                console.log('Error', error)
            }
        }
        fetchUserPosts()
    },[])


}