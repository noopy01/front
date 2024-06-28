import { useState, useEffect } from 'react';
import { useLocation } from "react-router-dom";
import styled from 'styled-components';
import axios from 'axios';

const OuterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f0f0f0;
  width: 100%;
  min-height: 100vh;
  margin-top : 10vh;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #ffffff;
  width: 963px;
  min-height: 100vh;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const TitleBox = styled.div`
  background-color: purple;
  color: white;
  padding: 10px 20px;
  border-radius: 8px;
  font-weight: bold;
  margin-top: 20px;
  margin-right : 50vw;
`;

const ImageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`;

const MbtiImage = styled.img`
  width: 150px;
  height: auto;
`;

const MbtiName = styled.h1`
  margin: 5%;
  font-size: 24px;
  color: black;
  font-weight:bold;
`;

const MbtiDescription = styled.p`
  font-size: 18px;
  color: black;

`;

const RecommendationSection = styled.div`
  width: 80%;
  margin-top: 40px;
   box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const RecommendationTitle = styled.h2`
  font-size: 20px;
  color: black;
  margin-bottom: 20px;
  font-weight: bold;
`;

const RecommendationList = styled.div`
  display: flex;
  justify-content: space-around;
`;

const RecommendationItem = styled.div`
  background-color: #f8f8f8;
  padding: 20px;
  border-radius: 10px;
  text-align: center;
  width: 150px;

`;

const ItemImage = styled.div`
  background-color: #D9D9D9;
  padding: 20px;
  margin-left: 30px;
  text-align: center;
  width: 50px;
  height : 50px;
`;

const ItemTitle = styled.h3`

  margin-top: 10%;
  font-size: 23px;
  font-weight: bold;
  color: black;
  padding: 2%;
`;

const ItemDescription = styled.p`
  font-size: 14px;
  color: gray;
  padding: 3%;
`;

const ItemDescription2= styled.p`
  font-size: 16px;
  color: black;
  padding: 3%;
`;

const Component = styled.div`
    margin-left : 2vw;
    margin-top : 2vh;
    background-color: #373b69;
    position: relative;
    display:inline-block;
`;

const MbtiInfo = () => {
  const location = useLocation();
  const [search, setSearch] = useState([]);
  const { id, imagePath } = location.state || {};

  useEffect(() => {
    const fetchData = async () => {
      if (id) {
        try {
          const response = await axios.get(`http://13.124.118.56:8080/percol/Mbti/${id}`, {
            method: "GET",
            headers: {  
              'Content-Type': 'application/json',
            },
          });
          setSearch(response.data.incenseDto);
          console.log(response);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      }
    };
    fetchData();
  }, []);

  return (
    <OuterContainer>
      <Container>
        <TitleBox>MBTI</TitleBox>
        <ImageWrapper>
          {imagePath && <MbtiImage src={imagePath} alt="MBTI 이미지" />}
          <MbtiName>INTP</MbtiName>
          <MbtiDescription>분석적이고 호기심 많은 성격</MbtiDescription>
        </ImageWrapper>
        <RecommendationSection>
          <RecommendationTitle>추천하는 향</RecommendationTitle>
          <RecommendationList>
            <RecommendationItem>
              <ItemImage></ItemImage> 
              <ItemTitle>아로마 향</ItemTitle>
              <ItemDescription>라벤더, 클래리 세이지 등</ItemDescription>
            </RecommendationItem>
            <RecommendationItem>
            <ItemImage></ItemImage> 
              <ItemTitle>시트러스 향</ItemTitle>
              <ItemDescription>베르가못, 자몽 등</ItemDescription>
            </RecommendationItem>
          </RecommendationList>
        </RecommendationSection>
        <RecommendationSection>
          <RecommendationTitle>추천하는 향수</RecommendationTitle>
          <RecommendationList>
            <RecommendationItem>
            <ItemImage></ItemImage> 
              <ItemTitle>Grey Vetiver</ItemTitle>
              <ItemDescription>Tom Ford</ItemDescription>
              <ItemDescription2>우아하고 깨끗한 베티버 향이 중심이 되어 고급스러운 이미지</ItemDescription2>
            </RecommendationItem>
            <RecommendationItem>
            <ItemImage></ItemImage> 
              <ItemTitle>Grey Vetiver</ItemTitle>
              <ItemDescription>Tom Ford</ItemDescription>
              <ItemDescription2>우아하고 깨끗한 베티버 향이 중심이 되어 고급스러운 이미지</ItemDescription2>
            </RecommendationItem>
            <RecommendationItem>
            <ItemImage>
            {search.map((perfume, index) => ( 
          <Component key={index}>
            <div className="title">{perfume.name}</div>
          </Component>
          ))}
          </ItemImage> 
              <ItemTitle>Grey Vetiver</ItemTitle>
              <ItemDescription>Tom Ford</ItemDescription>
              <ItemDescription2>우아하고 깨끗한 베티버 향이 중심이 되어 고급스러운 이미지</ItemDescription2>
            </RecommendationItem>
          </RecommendationList>
        </RecommendationSection>
      </Container>
    </OuterContainer>
  );
};

export default MbtiInfo;