
// 라우팅 작업

// import React, {useState} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage';
import Navbar from './pages/Navbar';
import Login from './pages/Login';


function App() {
  return (

    <div className="root-wrap">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/login" element={<Login/>}/> 

        </Routes>
    </BrowserRouter>

  
    </div>
   
    
  );

  
}

export default App;