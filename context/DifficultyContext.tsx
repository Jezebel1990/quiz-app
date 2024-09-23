'use client'; 

import { createContext, useState, ReactNode, useContext } from 'react';
import { Difficulty } from '../types/quiz';

type DifficultyContextType = {
  difficulty: Difficulty;
  setDifficulty: (difficulty: Difficulty) => void;
};

const DifficultyContext = createContext<DifficultyContextType | undefined>(undefined);

export const DifficultyProvider = ({ children }: { children: ReactNode }) => {
  const [difficulty, setDifficulty] = useState<Difficulty>(Difficulty.EASY);

  return (
    <DifficultyContext.Provider value={{ difficulty, setDifficulty }}>
      {children}
    </DifficultyContext.Provider>
  );
};

export const useDifficulty = () => {
  const context = useContext(DifficultyContext);
  if (!context) {
    throw new Error('useDifficulty deve ser usado dentro de DifficultyProvider');
  }
  return context;
};
