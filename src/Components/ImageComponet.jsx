import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const StyledImage = styled.img`
  cursor: pointer;
  display: block;
  margin: 20px auto;
  width: 100px; /* 원하는 크기로 설정 */
  height: auto;
`;

const ImageComponent = ({ id, imagePath }) => {
  const navigate = useNavigate();
  console.log(imagePath);
  function handleClick() {
        navigate(`/mbti/${id}`, {
            state: { id, imagePath }
        });
    }

  return (
    <StyledImage 
      src={imagePath} 
      alt={`Image ${id}`} 
      onClick={handleClick} 
    />
  );
};

export default ImageComponent;