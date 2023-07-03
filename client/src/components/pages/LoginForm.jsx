import React, {useState} from 'react';
import {fetchData} from "../../main";
import {useNavigate} from "react-router-dom";

function LoginForm({onLogin}) {
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
                    onLogin(data);
                    console.log(data)
                }
            })
            .catch((error)=>{
                console.log(error)
            })

    }

    return (
        <div className="container">

            <form onSubmit={onSubmit} className="login" style={{maxWidth:"400px"}} >
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