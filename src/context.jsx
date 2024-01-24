import React, { useState, useContext, createContext, useEffect } from "react";

const AppContext = createContext();
const getInitialDarkMode = () => {
    const prefersDarkMode = window.matchMedia(
        "(prefers-color-scheme: dark)"
    ).matches;
    const storedDarkMode = localStorage.getItem("darkTheme");

    if (storedDarkMode === null) {
        return prefersDarkMode;
    }

    return storedDarkMode === "true";
};
const AppProvider = ({ children }) => {
    const [activeLink, setActiveLink] = useState(1);
    const [isDarkMode, setIsDarkMode] = useState(getInitialDarkMode());
    const [searchItem, setSearchItem] = useState("table");
    const SetActiveLinkId = (id) => {
        setActiveLink(id);
    };

    const ToggleDarkMode = () => {
        localStorage.setItem("darkTheme", !isDarkMode);
        setIsDarkMode(!isDarkMode);
    };
    useEffect(() => {
        document.body.classList.toggle("dark-mode", isDarkMode);
    }, [isDarkMode]);
    return (
        <AppContext.Provider
            value={{
                isDarkMode,
                ToggleDarkMode,
                setActiveLink,
                activeLink,
                searchItem,
                setSearchItem,
            }}
        >
            {children}
        </AppContext.Provider>
    );
};
export default AppProvider;
export const GlobalData = () => useContext(AppContext);
