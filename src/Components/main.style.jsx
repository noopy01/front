import styled from "styled-components";

export const ImageSlider = styled.div`
    margin-top: 5vh;
    width: 100vw;

    .slide-container {
        display: flex;
        justify-content: center;
        align-items: center;
        height: calc(100vh - 15vh); 
    }

    .img {
        width: 100%; 
        height: 100%; 
        object-fit: cover;
    }
`;

export const CustomDots = styled.ul`
    position: absolute;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    list-style: none;   
    padding: 0;
    margin: 0;
    display: flex;
    justify-content: center;
    z-index: 10; 

    li {
        width: 12px;
        height: 12px;
        margin: 0 5px;
    }
`;

export const CustomDot = styled.li`
    width: 12px;
    height: 12px;
    background-color: ${({ active }) => (active ? '#ffffff' : '#ccc')};
    border-radius: 50%;
    cursor: pointer;
`;

const ArrowContainer = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  border: none;
  background: none;
  padding: 0;
  margin: 0;
  ${({ right }) => (right ? 'right: 0;' : 'left: 0;')}
  z-index: 1;
`;

ArrowContainer.shouldForwardProp = prop => prop !== 'right' && prop !== 'left';

export { ArrowContainer };

