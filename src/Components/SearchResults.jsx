import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from "axios";
import * as B from './main.style';
import MainImg from '../Img/Main.png';

function SearchResults() {
  const { title } = useParams();
  const [search, setSearch] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://13.124.118.56:8080/percol/PerfumeFind/${title}`, {
          headers: {
            'Content-Type': 'application/json',
          },
        });
        console.log(response);
        if (Array.isArray(response.data)) {
          setSearch(response.data); 
        } else {
          setSearch([]);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        setSearch([]);
      }
    };
    fetchData();
  }, [title]);

  return (
    <div>
      {title && (
        <B.Info>
          {search.map((perfume, index) => ( 
            <B.Component key={index}>
              <B.Movieimg>
                <B.Img src={perfume.image || MainImg} alt={perfume.name || 'No Name'} /> 
                <B.Movieinfo>
                  <div className="title">{perfume.name || 'No Name'}</div>
                  {perfume.content && <div className="content">{perfume.content}</div>}
                  {perfume.price ? <div className="price">{`가격: ${perfume.price}원`}</div> : <div className="price">가격 정보 없음</div>}
                  {perfume.buyUrl ? <a href={perfume.buyUrl} target="_blank" rel="noopener noreferrer">구매하기</a> : <div>구매 링크 없음</div>}
                </B.Movieinfo>
              </B.Movieimg>
            </B.Component>
          ))}
        </B.Info>
      )}
    </div>
  );
}

export default SearchResults;