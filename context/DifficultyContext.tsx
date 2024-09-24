"use client";

import React, { createContext, useContext, useState, ReactNode } from 'react';

const DifficultyContext = createContext<any>(null);

export const DifficultyProvider = ({ children }: { children: ReactNode }) => {
    const [difficulty, setDifficulty] = useState('easy'); // valor padrão

    return (
        <DifficultyContext.Provider value={{ difficulty, setDifficulty }}>
            {children}
        </DifficultyContext.Provider>
    );
};

export const useDifficulty = () => {
    return useContext(DifficultyContext);
};
