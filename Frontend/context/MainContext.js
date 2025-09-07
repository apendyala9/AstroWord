import { createContext, useContext, useState } from 'react';

export const MainContext = createContext();

export const MainContextProvider = ({ children }) => {
    const [selectedTopic, setSelectedTopic] = useState(null);
    return (
        <MainContext.Provider value={{ selectedTopic, setSelectedTopic }}>
            {children}
        </MainContext.Provider>
    );
};