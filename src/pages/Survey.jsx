import React from 'react';
import styled from 'styled-components';



const SurveyContainer = styled.div`
    width: 80%;
    min-height: 5200px;
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    .body {
        background-color: pink;
    }
`;



const Surtext = styled.div`
    text-align: center;
    color: white;
    width: 55px;
    padding: 5px;
    margin: 13px;
    background-color: purple;
    border-radius: 25px;
`;

const FindText = styled.h1`
    margin: 25px;
    color: purple;
    white-space: pre-line
`;

const WhatText = styled.h2`
    
    padding: 10px;
    color: black;
`;

const TimeIcon = styled.div`

    margin-right: 10px;
    
`;

const TimerText = styled.div`

    color: gray;

`;

const StartBtn = styled.button`
    padding: 10px;
    width: 340px;
    margin: 13px;
    color: white;
    background-color: purple;
    font-size: 1rem;
    justify-align: center;
    align-items: center;
    border-radius: 25px;
    border: none;
`;
export default function Survey() {
    return (
        <SurveyContainer>
            <Surtext>survey</Surtext>
            
            <FindText>Find a perfume that {'\n'} suits your personality</FindText>

            <WhatText>나에게 어울리는 향수는? </WhatText>
            
            <TimeIcon role="img" aira-label="timer">⏱️</TimeIcon>
            <TimerText>소요시간 3분내외</TimerText>


            <StartBtn type="button">시  작</StartBtn>
        </SurveyContainer>


    )
}