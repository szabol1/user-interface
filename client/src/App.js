import './App.css';
import { useState, createContext } from 'react';
import Navbar from "./components/pages/Navbar"
import LoginForm from "./components/pages/LoginForm"
import RegisterForm from "./components/pages/RegisterForm"
import HomePage from "./components/pages/HomePage"
import ViewProfile from "./components/pages/ViewProfile"
import {BrowserRouter, Routes, Route} from "react-router-dom";
import PostForm from "./components/pages/PostForm";
import {fetchData} from "./main";


//okay so the biggest issue Ive had is for some reason when You register and it navigates to the register page
//it doesnt show the username even though im doing the same tactic as I am for Log in- which is working fine

export const DataContext = createContext()//this did not work so I did a work around with local storage since states werent working either but Ill give it another go in the future

function App() {

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isRegistered, setIsRegistered] = useState(false);
    const [username, setUsername] = useState('');
    const [userId, setUserId] = useState('');

    const handleLogin = (data) => {
        setUsername(data.username);
        setUserId(user._id);
        setIsLoggedIn(true)
    };
    const handleRegister = (data) =>{
        setIsRegistered(true)
    }

    const user = (e) => {//soo many failed attempts to get User info without local storage alas all failed
        e.preventDefault();
        fetchData("/user/getUser", {
                username
            }
            , "POST"
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
  return (
    <div className="App">
        <BrowserRouter>
            < Navbar/>
            {isLoggedIn ? null : isRegistered ? null : <div className = "form-Wrapper">{isLoggedIn ? null : < LoginForm onLogin={handleLogin}/>}</div>}
            <div>
            <Routes>
                <Route path ="LoginForm"  className = "form-Wrapper" element={<LoginForm onLogin={handleLogin} />}/>
                <Route path ="RegisterForm"  className = "form-Wrapper" element={<RegisterForm onRegister={handleRegister}/>}/>
                <Route path ="HomePage" element ={<HomePage />}/>
                <Route path="ViewProfile" element={<ViewProfile />}>
                       <Route path={"PostForm"} element={<PostForm prop={userId}/>}/>
                </Route>
            </Routes>
            </div>

        </BrowserRouter>
    </div>

  );
}
export default App;
