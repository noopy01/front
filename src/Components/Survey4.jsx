import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useProgress } from './ProgressContext';
import ProgressBar from './ProgressBar';

const OneContainer = styled.div`
    // background-color: rgba(240, 240, 240, 1);
    background-color: white;
    height: 1200px;
    width: 1920px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const SurveyCon = styled.div`
    display: block;
    justify-content: center;
    text-align: center;
    width: 935px;
    // height: 1119px;
    height: auto;
    padding: 20px;
    border-radius: 10px;
    background-color: white;
    // box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;



const QuestionCon = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 20px;
`;

const Number = styled.h2`
    color: rgba(199, 115, 240, 1);
    font-size: 25px;
    margin-right: 8px;
`;

const Question = styled.div`

    color: black;
    font-size: 25px;
    font-weight: 600;
    // display: inline-block;
`;



const BtnCon = styled.div`

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-align: center;
    gap: 40px;
`;

const StartBtn = styled.button`
    // padding: 10px;
    // width: 75%;
    width: 935px;
    height: 75px;
    margin: 21px 12px;
    // margin: 10px 0;
    color: white;
    background-color: rgba(157, 62, 202, 1);
    font-size: 1rem;
    justify-align: center;
    text-align: left;
    align-items: center;
    border-radius: 15px;
    border: none;
    &:hover {
        background-color: rgba(199, 115, 240, 1);
        transition: 0.3s;
    }
`;

const Pages = styled.div`

    height: 35.12px;
    weight: 120px;


`;

export default function Survey4() {

    const navigate = useNavigate();
    const { handleNext } = useProgress();

    const navigateToSurThr = () => {
        handleNext();
        navigate("/survey/5");
    }

    return (
        <OneContainer>
            <SurveyCon>

                <QuestionCon>
                    <Number>03</Number>
                    <Question>향수를 주로 사용하는 장소는 어디인가요?</Question>
                </QuestionCon>

                <ProgressBar/>

                <BtnCon>
                    <StartBtn type="button" onClick={navigateToSurThr}>직장 / 학교</StartBtn>
                    <StartBtn type="button" onClick={navigateToSurThr}>데이트 / 외출</StartBtn>
                    <StartBtn type="button" onClick={navigateToSurThr}>운동 / 야외 활동</StartBtn>
                    <StartBtn type="button" onClick={navigateToSurThr}>집 / 휴식</StartBtn>
                </BtnCon>
               
               <Pages>3/5</Pages>
            </SurveyCon>

        </OneContainer>

        
    )

}