import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import './index.css'
import SignupPage from './Components/Signup.jsx'
import MainPage from './Components/main.jsx'
import Navbar from './Components/NavBar.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
        <div>
        <Navbar/>
          <Routes>
            <Route path="/main" element={<MainPage/>}/>
            <Route path="signup" element={<SignupPage/>}/>
          </Routes> 
        </div>
      </BrowserRouter>
  </React.StrictMode>,
)
