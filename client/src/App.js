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

export const DataContext = createContext()//this did not work did a little work around with states

function App() {

    const [username, setUsername] = useState('');
    const [userId, setUserId] = useState('');

    const handleLogin = (data) => {
        setUsername(data.username);
        setUserId(user._id);
    };

    const user = (e) => {
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
            <div className = "form-Wrapper">
            <Routes>
                <Route path ="LoginForm" element={<LoginForm onLogin={handleLogin} />}/>
                <Route path ="RegisterForm" element={<RegisterForm />}/>
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
