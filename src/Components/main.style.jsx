import styled from "styled-components";

export const SearchContainer = styled.div`
    display : flex;
    margin-left : 28.5vw;
    margin-top: 15vh;
    .search1{
        margin-top : 2vh;
        padding-left : 1vw;
        width : 35vw;
        height : 5vh;
        border-radius : 1vw;    
        border-color : #700E9F;
  }
`

export const LeftImage = styled.img`
    width: 50px; 
    height: 70px; 
`;

export const RightImage = styled.img`
    width: 50px; 
    height: 70px; 
`;

export const MainImg = styled.div`
    img {
        width: 100%; 
    }
`

export const Info = styled.div`
  background-color : #11264f;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 auto;
  margin-top: 5vh;
  width: 70vw;
  max-height: 100vh;
  overflow-y: auto;
  &::-webkit-scrollbar {
    width: 10px;
  }
  &::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 5px;
  }
  &::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`

export const Component = styled.div`
    margin-left : 2vw;
    margin-top : 2vh;
    background-color: #373b69;
    position: relative;
    display:inline-block;
`;

export const Movieimg = styled.div`
    width: 200px;
    background-color: #373b69;
    position: relative;
`;
export const Img = styled.img`
  width: 100%;
`;
export const Movieinfo = styled.div`
  font-size : 0.5em;
  margin-left: 1vw;
  margin-top: 0.5vh;
  margin-bottom : 3vh;
  color: #FFFFFF;
  display:flex;
  justify-content: space-between;
  align-items: flex-start;
  #average {
    margin-right: 1vw;
    white-space: nowrap;
  }
  .title {
    flex: 1;
    margin-right: 1vw;
  }
`;



