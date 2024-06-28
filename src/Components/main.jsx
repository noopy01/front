import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as B from './main.style';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Left from '../Img/Left.png';
import Right from '../Img/Right.png';
import MainImg from '../Img/Main.png';

function Main() {    
  const [title, setTitle] = useState('');
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setTitle(e.target.value);
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && title) {
      navigate(`/search/${title}`);
    }
  }

  return (
    <div>
      <B.SearchContainer>
        <B.LeftImage src={Left} alt="왼쪽" />
        <input
          className="search1"
          placeholder='검색어를 입력해주세요'
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
        />
        <B.RightImage src={Right} alt="오른쪽" />
      </B.SearchContainer>
      <B.MainImg>
        <img src={MainImg} alt="메인이미지"/>
      </B.MainImg>
    </div>
  );
}

export default Main;