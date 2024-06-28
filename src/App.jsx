
// 라우팅 작업

// import React, {useState} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage';
import Navbar from './pages/Navbar';
import Login from './pages/Login';
import Survey from './pages/Survey';
import Survey2 from './pages/Survey2';
import Survey3 from './pages/Survey3';
import Survey4 from './pages/Survey4';
import Survey5 from './pages/Survey5';
import Survey6 from './pages/Survey6';
import Survey7 from './pages/Survey7';

import { ProgressProvider } from '../src/pages/ProgressContext';
// import StepProgressBar from './pages/Prograssbar';


function App() {
  return (
    <ProgressProvider>
      <div className="root-wrap">
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/login" element={<Login/>}/> 
            <Route path="/survey" element={<Survey/>}/>
            <Route path="/survey/2" element={<Survey2/>}/>
            <Route path="/survey/3" element={<Survey3/>}/>
            <Route path="/survey/4" element={<Survey4/>}/>
            <Route path="/survey/5" element={<Survey5/>}/>
            <Route path="/survey/6" element={<Survey6/>}/>
            <Route path="/survey/7" element={<Survey7/>}/>
          </Routes>
        </BrowserRouter>

        {/* <div className='Step'>
          <StepProgressBar/>
        </div> */}
      </div>
    </ProgressProvider>
    
   

    
  );

  
}

export default App;