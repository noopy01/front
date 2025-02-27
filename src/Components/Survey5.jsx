import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useProgress } from './ProgressContext';
import ProgressBar from './ProgressBar';

const OneContainer = styled.div`
    // background-color: rgba(240, 240, 240, 1);
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

export default function Survey5() {

    const navigate = useNavigate();
    const { handleNext } = useProgress();

    const navigateToSurThr = () => {
        handleNext();
        navigate("/survey/6");
    }

    return (
        <OneContainer>
            <SurveyCon>

                <QuestionCon>
                    <Number>04</Number>
                    <Question>선호하는 향수의 지속시간은 얼마나 되나요?</Question>
                </QuestionCon>

                <ProgressBar/>

                <BtnCon>
                    <StartBtn type="button" onClick={navigateToSurThr}>1~2시간</StartBtn>
                    <StartBtn type="button" onClick={navigateToSurThr}>3~4시간</StartBtn>
                    <StartBtn type="button" onClick={navigateToSurThr}>5~6시간</StartBtn>
                    <StartBtn type="button" onClick={navigateToSurThr}>6시간 이상</StartBtn>
                </BtnCon>
               
               <Pages>4/5</Pages>
            </SurveyCon>

        </OneContainer>

        
    )

}