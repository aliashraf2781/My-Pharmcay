import React from 'react';
import { createContext, useState } from 'react';
export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [dark, setDark] = useState(false);
    function toggleTheme() {
        setDark(dark => !dark)
    }

    return (
        <ThemeContext.Provider value={{ dark, toggleTheme }}>
            <div className={`font-cairo ${dark ? "dark" : ""}`}>
                {children}
            </div>
        </ThemeContext.Provider>
    );
};