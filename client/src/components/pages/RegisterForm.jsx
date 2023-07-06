import React from 'react';
import { fetchData} from "../../main";
import {useState} from "react";
import {useNavigate} from "react-router-dom";

function RegisterForm ({onRegister}) {

    const navigate = useNavigate();

    const [user, setUser] =  useState({//initial state sort of like a model
        email: '',
        username: '',
        password: '',
        password2: ''
    })
    const{email, username, password, password2} = user

    const onChange = (e) => setUser({...user, [e.target.name]: e.target.value})//updater

    const onSubmit = (e) => {
        e.preventDefault()
        if(password != password2) {
            console.log("Passwords do not match")
        }else{
            console.log("success")
        }
        fetchData("/user/register", {
                email, username, password
            }
            , "POST"
            )
            .then((data) =>{
                if(!data.message){
                    console.log(data)
                    onRegister(data)
                    localStorage.setItem("user", JSON.stringify(data))
                    navigate('/ViewProfile')
                }
            })
            .catch((error)=>{
            console.log(error)
        })

    }

    return (
        <div className={"form-Wrapper"}>

            <form onSubmit={onSubmit} className= "register" style={{ maxWidth: '400px'}}>
                <h2>Registration Form</h2>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="text" className="form-control" name="email" id="email" onChange={onChange} value={email}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="username" className="form-label">Username</label>
                    <input type="text" className="form-control" name="username"  id="username" onChange={onChange} value={username} />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" name="password"  id="password" onChange={onChange} value={password} />
                </div>
                <div className="mb-3">
                    <label htmlFor="password2" className="form-label">Confirm Password</label>
                    <input type="password" className="form-control" name="password2" id="password2" onChange={onChange} value={password2} />
                </div>
                <button type="submit" className="btn btn-primary">Register</button>
            </form>
        </div>
    );
}

export default RegisterForm;