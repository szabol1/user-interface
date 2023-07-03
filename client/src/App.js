import './App.css';
import { useState } from 'react';
import Navbar from "./components/pages/Navbar"
import LoginForm from "./components/pages/LoginForm"
import RegisterForm from "./components/pages/RegisterForm"
import HomePage from "./components/pages/HomePage"
import ViewProfile from "./components/pages/ViewProfile"
import {BrowserRouter, Routes, Route} from "react-router-dom";
import PostForm from "./components/pages/PostForm";



function App() {


    const [username, setUsername] = useState('');//not sure how else to get the current users userid or username?
    const [userId, setUserId] = useState('');//googled a lot

    const handleLogin = (data) => {
        setUsername(data.username);
        setUserId(data.userId);

    };

  return (
    <div className="App">
        <BrowserRouter>
            < Navbar/>
            <div className = "form-Wrapper">
            <Routes>
                <Route path ="LoginForm" element={<LoginForm onLogin={handleLogin} />}/>
                <Route path ="RegisterForm" element={<RegisterForm />}/>
                <Route path ="HomePage" element ={<HomePage />}/>
                <Route path="ViewProfile" element={<ViewProfile prop={username}/>}>
                       <Route path={"PostForm"} element={<PostForm prop={userId}/>}/>
                </Route>
            </Routes>
            </div>

        </BrowserRouter>
    </div>

  );
}
export default App;
