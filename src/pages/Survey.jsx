import React from 'react';
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
    margin: 25px;
    color: purple;
    white-space: pre-line
`;

const WhatText = styled.h2`
    font-weight: bold;
    padding: 10px;
    color: black;
`;

const Qtext = styled.div`
    
    color: rgba(69, 69, 69, 1);
`;

const TimerText = styled.div`
    color: gray;
    text-align: center;
    margin: 20px 0;
    position: relative;
    width: 100%;
    &::before,
    &::after {
        content: '';
        position: absolute;
        top: 50%;
        width: 40%;
        border-top: 1px dashed gray;
    }
    &::before {
        left: 0;
    }
    &::after {
        right: 0;
    }
`;

const StartBtn = styled.button`
    padding: 10px;
    width: 523px;
    height: 54px;
    margin: 13px;
    color: white;
    background-color: rgba(157, 62, 202, 1);
    font-size: 1rem;
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