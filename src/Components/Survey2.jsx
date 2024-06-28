import { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useProgress } from './ProgressContext';
import ProgressBar from './ProgressBar';

const OneContainer = styled.div`
    background-color: white;
    height: 60vh;
    width: 100% ;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top : 35vh;
`;

const SurveyCon = styled.div`
    display: block;
    justify-content: center;
    text-align: center;
    width: 935px;
    height: auto;
    padding: 20px;
    border-radius: 10px;
    background-color: white;
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
`;

const BtnCon = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-align: center;
`;

const StartBtn = styled.button`
    width: 935px;
    height: 75px;
    margin: 21px 12px;
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

export default function Survey2() {
    const navigate = useNavigate();
    const { handleNext } = useProgress();
    const [selectedSeason, setSelectedSeason] = useState('');

    const handleClick = (season) => {
        setSelectedSeason(season);
        handleNext();
        navigate(`/survey/3`, { state: { selectedSeason: season } });
    }

    return (
        <OneContainer>
            <SurveyCon>
                <QuestionCon>
                    <Number>01</Number>
                    <Question>당신이 좋아하는 계절은 무엇인가요?</Question>
                </QuestionCon>
                <ProgressBar/>
                <BtnCon>
                    <StartBtn type="button" onClick={() => handleClick('봄')}>봄</StartBtn>
                    <StartBtn type="button" onClick={() => handleClick('여름')}>여름</StartBtn>
                    <StartBtn type="button" onClick={() => handleClick('가을')}>가을</StartBtn>
                    <StartBtn type="button" onClick={() => handleClick('겨울')}>겨울</StartBtn>
                </BtnCon>
                <Pages>1/5</Pages>
            </SurveyCon>
        </OneContainer>
    );
}