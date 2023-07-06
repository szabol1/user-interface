import React, {useState, createContext} from 'react';
import {fetchData} from "../../main";
import {useNavigate} from "react-router-dom";
import PostForm from "./PostForm";
export const DataContext = createContext();//creates user data
function LoginForm({onLogin}) {//s


    const navigate = useNavigate();

    const [user, setUser] =  useState({//initial state sort of like a model
        username: '',
        password: ''
    })
    const{username, password} = user

    const onChange = (e) => setUser({...user, [e.target.name]: e.target.value})//updater

    const onSubmit = (e) => {
        e.preventDefault();
        fetchData("/user/login", {
                username, password
            }
            , "POST"
        )
            .then((data) =>{
                if(!data.message){
                    navigate('/ViewProfile')
                    console.log(data)
                    onLogin(data)
                    localStorage.setItem("user", JSON.stringify(data))
                }
            })
            .catch((error)=>{
                console.log(error)
            })


    }

    return (

        <div className="container">

            <form onSubmit={onSubmit} className="login" style={{maxWidth:"500px"}} >
                <h2>Log In</h2>
                <div className="mb-3">
                    <label htmlFor="username" className="form-label">Username</label>
                    <input type="username" className="form-control" id="username" name="username" onChange = {onChange} value={username} />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" id="password" name="password" onChange={onChange} value={password} />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>

        </div>
    );
}

export default LoginForm;