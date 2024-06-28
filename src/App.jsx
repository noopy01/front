
// 라우팅 작업

// import React, {useState} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage';
import Navbar from './pages/Navbar';
import Login from './pages/Login';
import Survey from './pages/Survey';


function App() {
  return (

    <div className="root-wrap">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/login" element={<Login/>}/> 
          <Route path="/survey" element={<Survey/>}/> 
        </Routes>
    </BrowserRouter>

  
    </div>
   
    
  );

  
}

export default App;