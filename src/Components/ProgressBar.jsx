import React from 'react';
import styled from 'styled-components';
import { useProgress } from './ProgressContext';

const ProgressBarContainer = styled.div`
  width: 100%;
  background-color: #e0e0e0;
  height: 10px;
  border-radius: 5px;
  overflow: hidden;
  margin-top: 20px;
`;

const Progress = styled.div`
  height: 100%;
  background-color: purple;
  width: ${({ width }) => width}%;
  transition: width 0.3s ease-in-out;
`;

const ProgressBar = () => {
  const { progress } = useProgress();
  
  return (
    <ProgressBarContainer>
      <Progress width={progress} />
    </ProgressBarContainer>
  );
};

export default ProgressBar;