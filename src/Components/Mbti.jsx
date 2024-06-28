import styled from 'styled-components';
import ImageComponent from './ImageComponet';
import Link1 from '../Img/Link1.png';
import Link2 from '../Img/Link2.png';
import Link3 from '../Img/Link3.png';
import Link4 from '../Img/Link4.png';
import Link5 from '../Img/Link5.png';
import Link6 from '../Img/Link6.png';
import Link7 from '../Img/Link7.png';
import Link8 from '../Img/Link8.png';
import Link9 from '../Img/Link9.png';
import Link10 from '../Img/Link10.png';
import Link11 from '../Img/Link11.png';
import Link12 from '../Img/Link12.png';
import Link13 from '../Img/Link13.png';
import Link14 from '../Img/Link14.png';
import Link15 from '../Img/Link15.png';
import Link16 from '../Img/Link16.png';

const Container = styled.div`
  background-color: #ffffff;
  width: 100%;
  top: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;

const ContentWrapper = styled.div`
  width: 963px;
  height: 1119px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const TitleWrap = styled.div`
  padding-top: 27px;
  text-align: left;
`;

const TitleBox = styled.div`
  background-color: purple;
  color: white;
  border-radius: 8px;
  height: 35.12px;
  width: 120px;
  font-weight: bold;
  margin-bottom: 36px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Question = styled.span`
  color: purple;
  font-weight: bold;
  font-size: 30px;
`;

const Description = styled.span`
  color: black;
  font-weight: bold;
  margin-left: 5px;
  font-size: 25px;
`;

const ImageList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style-type: none;
  padding: 0;
  justify-content: flex-start;
  margin-top: 20px;
`;

const ImageListItem = styled.li`
  margin: 10px;
  flex-basis: calc(25% - 20px); 
  box-sizing: border-box;
`;

const StyledParagraph = styled.p`
  margin: 0;
`;

export default function Mbti() {
  return (
    <Container>
      <ContentWrapper>
        <TitleWrap>
          <TitleBox>MBTI</TitleBox>
          <StyledParagraph>
            <Question>Q1</Question>
            <Description>당신의 mbti를 클릭해주세요.</Description>
          </StyledParagraph>
        </TitleWrap>
        <ImageList>
          <ImageListItem>
            <ImageComponent id="1" imagePath={Link1} />
          </ImageListItem>
          <ImageListItem>
            <ImageComponent id="3" imagePath={Link2} />
          </ImageListItem>
          <ImageListItem>
            <ImageComponent id="5" imagePath={Link3} />
          </ImageListItem>
          <ImageListItem>
            <ImageComponent id="7" imagePath={Link4} />
          </ImageListItem>
          <ImageListItem>
            <ImageComponent id="9" imagePath={Link5} />
          </ImageListItem>
          <ImageListItem>
            <ImageComponent id="11" imagePath={Link6} />
          </ImageListItem>
          <ImageListItem>
            <ImageComponent id="13" imagePath={Link7} />
          </ImageListItem>
          <ImageListItem>
            <ImageComponent id="15" imagePath={Link8} />
          </ImageListItem>
          <ImageListItem>
            <ImageComponent id="17" imagePath={Link9} />
          </ImageListItem>
          <ImageListItem>
            <ImageComponent id="19" imagePath={Link10} />
          </ImageListItem>
          <ImageListItem>
            <ImageComponent id="21" imagePath={Link11} />
          </ImageListItem>
          <ImageListItem>
            <ImageComponent id="23" imagePath={Link12} />
          </ImageListItem>
          <ImageListItem>
            <ImageComponent id="25" imagePath={Link13} />
          </ImageListItem>
          <ImageListItem>
            <ImageComponent id="27" imagePath={Link14} />
          </ImageListItem>
          <ImageListItem>
            <ImageComponent id="29" imagePath={Link15} />
          </ImageListItem>
          <ImageListItem>
            <ImageComponent id="31" imagePath={Link16} />
          </ImageListItem>
        </ImageList>
      </ContentWrapper>
    </Container>
  );
}