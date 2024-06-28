import React, { createContext, useContext, useState } from 'react';

const ProgressContext = createContext();

export const useProgress = () => useContext(ProgressContext);

export const ProgressProvider = ({ children }) => {
  const [progress, setProgress] = useState(0);
  const steps = 5; // 총 5개 페이지

  const handleNext = () => {
    setProgress(prev => Math.min(100, (prev + (100 / steps))));
  };

  return (
    <ProgressContext.Provider value={{ progress, handleNext }}>
      {children}
    </ProgressContext.Provider>
  );
};