import React, { useEffect } from "react";
import { useProgress } from './ProgressContext';
import ProgressBar from './ProgressBar';
import styled from "styled-components";

const FinalCon = styled.div`
    background-color: white;
    height: 1200px;
    width: 1920px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const TextCon = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 20px;
`;

const Number = styled.h2`
    color: rgba(199, 115, 240, 1);
    font-size: 30px;
    margin-right: 8px;
`;

const FinalTxt = styled.div`
    display: flex;
    justify-content: left;
    color: black;
    font-size: 25px;
    font-weight: 600;
    // display: inline-block;
`;

export default function Survey7() {
    
    const { setProgressComplete } = useProgress();

    useEffect(() => {
        setProgressComplete(); // 마지막 페이지에 도달하면 프로그레스바를 가득 채움
    }, [setProgressComplete]);

    return (
        <FinalCon>
            <TextCon>
                <Number>06</Number>
                <FinalTxt>당신에게 추천하는 향수는</FinalTxt>
            </TextCon>
           
            <ProgressBar/>
        </FinalCon>


    )
}