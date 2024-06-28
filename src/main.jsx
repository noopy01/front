import ReactDOM from 'react-dom/client'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import './index.css'
import SignupPage from './Components/Signup.jsx'
import MainPage from './Components/main.jsx'
import Navbar from './Components/NavBar.jsx';
import Survey from './Components/Survey.jsx';
import Survey2 from './Components/Survey2.jsx';
import Survey3 from './Components/Survey3.jsx';
import Survey4 from './Components/Survey4.jsx';
import Survey5 from './Components/Survey5.jsx';
import Survey6 from './Components/Survey6.jsx';
import Survey7 from './Components/Survey7.jsx';
import Login from './Components/login.jsx';
import KakaoRedirectHandler from './Components/KakaoRedirecthandler.jsx';
import Mbti from './Components/Mbti.jsx';
import MbtiInfo from './Components/MbtiInfo.jsx';
import MyPage from './Components/MyPage.jsx';

import { ProgressProvider } from '../src/Components/ProgressContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(  
  <ProgressProvider>
    <BrowserRouter>
        <div>
        <Navbar/>
          <Routes>
            <Route path="/" element={<MainPage/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/auth/kakao/callback" element={<KakaoRedirectHandler />} />
            <Route path="/signup" element={<SignupPage/>}/>
            <Route path="/survey" element={<Survey/>}/>
            <Route path="/mbti" element={<Mbti/>}/>
            <Route path="/mbti/:id" element={<MbtiInfo/>}/>
            <Route path="/survey/2" element={<Survey2/>}/>
            <Route path="/survey/3" element={<Survey3/>}/>
            <Route path="/survey/4" element={<Survey4/>}/>
            <Route path="/survey/5" element={<Survey5/>}/>
            <Route path="/survey/6" element={<Survey6/>}/>
            <Route path="/survey/7" element={<Survey7/>}/>
            <Route path="/mypage" element={<MyPage/>}/>
          </Routes> 
        </div>
      </BrowserRouter>
      </ProgressProvider>
)
