import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';


const SurveyContainer = styled.div`
    width: 100%;
    min-height: 100vh;
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    .body {
        background-color: pink;
    }
`;



const FindText = styled.h1`
    font-size: 48px;
    margin: 25px;
    margin-top: 247px;
    margin-bottom: 100px;
    color: rgba(199, 115, 240, 1);
    white-space: pre-line
`;

const WhatText = styled.h2`
    font-weight: bold;
    // padding: 10px;
    color: black;
`;

const Qtext = styled.div`

    margin-bottom: 100px;
    color: rgba(69, 69, 69, 1);
`;

const TimerText = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: black;
  margin: 40px 0; /* 텍스트와 점선 사이의 간격 추가 */
  width: 100%;
  position: relative;

  &::before,
  &::after {
    content: '';
    position: absolute;
    width: 40%;
    border-top: 1px dashed gray;
  }

  &::before {
    top: 0;
    transform: translateY(-2000%); /* 점선을 텍스트 위로 이동 */
  }

  &::after {
    bottom: 0;
    transform: translateY(2000%); /* 점선을 텍스트 아래로 이동 */
  }

  span {
    background-color: white;
    color: gray;
    padding: 40px 10px; /* 텍스트 주변 여백 추가 */
  }
`;

const StartBtn = styled.button`
    padding: 10px;
    width: 523px;
    height: 54px;
    margin: 13px;
    margin-top: 100px;
    color: white;
    background-color: rgba(157, 62, 202, 1);
    font-size: 1.2rem;
    font-weight: bold;
    justify-align: center;
    align-items: center;
    border-radius: 45px;
    border: none;
`;
export default function Survey() {

    const navigate = useNavigate();

    const navigateToSurOne = () => {
        navigate("/survey/2");
    }

    return (
        <SurveyContainer>
            
            <FindText>Find a perfume that {'\n'} suits your personality</FindText>

            <WhatText>나에게 어울리는 향수는? </WhatText>
            <Qtext>몇가지 질문을 통해 당신에게 향수를 추천합니다.</Qtext>
            <TimerText>⏱️ 소요시간: 3분내외</TimerText>


            <StartBtn type="button" onClick={navigateToSurOne}>시  작</StartBtn>
        </SurveyContainer>


    )
}