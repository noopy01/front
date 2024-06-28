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
  text-align: center;
  width: 100%;
  height: 100px;
`;

const ItemTitle = styled.h3`
  margin-top: 10%;
  font-size: 18px;
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

export default function MbtiInfo() {
  const location = useLocation();
  const { id, imagePath } = location.state || {};
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post('http://13.124.118.56:8080/percol/Mbti', {
          id,
        }, {
          headers: {
            'Content-Type': 'application/json',
          },
        });
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [id]);

  const { incenseDto, incenseDto2 } = data;

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
            {incenseDto && (
              <RecommendationItem>
                <ItemImage></ItemImage>
                <ItemTitle>{incenseDto.name}</ItemTitle>
                <ItemDescription>{incenseDto.content}</ItemDescription>
              </RecommendationItem>
            )}
            {incenseDto2 && (
              <RecommendationItem>
                <ItemImage></ItemImage>
                <ItemTitle>{incenseDto2.name}</ItemTitle>
                <ItemDescription>{incenseDto2.content}</ItemDescription>
              </RecommendationItem>
            )}
          </RecommendationList>
        </RecommendationSection>
      </Container>
    </OuterContainer>
  );
}