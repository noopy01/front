import { useEffect, useState } from 'react';
import axios from "axios";
import * as B from './main.style';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Left from '../Img/Left.png';
import Right from '../Img/Right.png';
import MainImg from '../Img/Main.png';

function Main() {    
  const [title, setTitle] = useState('');
  const [search, setSearch] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      if (title.trim() !== '') {
        try {
          const response = await axios.get(`http://13.124.118.56:8080/percol/PerfumeFind/`, {
            method: "GET",
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkOGY2YmE1ZmUwZTRkN2U0ZGI1Mjc5M2U1Y2ViZTE4ZiIsInN1YiI6IjY2Mjg5NmM0MTc2YTk0MDE2NjgyMjliMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.sl80DdobF9_NA9Mib8y9iGb54XIqgHu6igfwZjFfP8I`
            },
          });
          setSearch(response.data.results);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      }
    };
    fetchData();
  }, [title]);

  const handleInputChange = (e) => {
    setTitle(e.target.value)
  }
    return (
        <div>
          <B.SearchContainer>
            <B.LeftImage src={Left} alt="왼쪽" />
              <input className="search1"  placeholder='검색어를 입력해주세요' onChange = {handleInputChange}/>
            <B.RightImage src={Right} alt="오른쪽" />
          </B.SearchContainer>
          <B.MainImg>
            <img src={MainImg} alt="메인이미지"/>
          </B.MainImg>
          {title && (
        <B.Info>
          {search.map((movie, index) => ( 
          <B.Component key={index}>
            <B.Movieimg>
              <B.Img src={movie.poster_path} alt={movie.title} />
              <B.Movieinfo>
                <div className="title">{movie.title}</div>
                <div id = "average">{movie.vote_average}</div>
              </B.Movieinfo>
            </B.Movieimg>
          </B.Component>
          ))}
        </B.Info>
      )}
        </div>
    );
}
export default Main;