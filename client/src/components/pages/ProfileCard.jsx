import UserPosts from "./UserPosts"
import React, {useState, useEffect} from "react";
import {fetchData} from "../../main";
import {useState} from "react";
function ProfileCard(){

    const [loggedInUsername, setLoggedInUsername] = useState('');

    useEffect(() => {
        fetchUsername();
    }, []);

        const fetchUsername = async () => {

            fetchData("/user/getUsername", {

                }
                , "GET"
            )
                .then((data) =>{
                    if(!data.message){
                        console.log(data)
                    }
                })
                .catch((error)=>{
                    console.log(error)
                })

    }

    return(
        <div className={"container"}>

            <div>
                <img src={imageUrl} alt="Profile" className="profile-image" />
                <h2>{loggedInUsername}</h2>
            </div>

        </div>
    );

}


export default ProfileCard