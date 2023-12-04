import { createContext, useState } from 'react';

export const ArticleMenusContext = createContext<any>(null);

export const ArticleMenusProvider = ({ children }) => {
    const [isContentMenuOpen, setContentMenuOpen] = useState(false);
    const [isColorMenuOpen, setColorMenuOpen] = useState(false);
    const [isFontMenuOpen, setFontMenuOpen] = useState(false);
    const [isMoreMenuOpen, setMoreMenuOpen] = useState(false);

    const toggleContentMenu = () => {
        setColorMenuOpen(false);
        setFontMenuOpen(false);
        setMoreMenuOpen(false);
        setContentMenuOpen(!isContentMenuOpen);
    };

    const toggleColorMenu = () => {
        setContentMenuOpen(false);
        setFontMenuOpen(false);
        setMoreMenuOpen(false);
        setColorMenuOpen(!isColorMenuOpen);
    };

    const toggleFontMenu = () => {
        setContentMenuOpen(false);
        setColorMenuOpen(false);
        setMoreMenuOpen(false);
        setFontMenuOpen(!isFontMenuOpen);
    };

    const toggleMoreMenu = () => {
        setContentMenuOpen(false);
        setColorMenuOpen(false);
        setFontMenuOpen(false);
        setMoreMenuOpen(!isMoreMenuOpen);
    };

    return (
        <ArticleMenusContext.Provider
            value={{
                isContentMenuOpen,
                isColorMenuOpen,
                isFontMenuOpen,
                isMoreMenuOpen,
                toggleContentMenu,
                toggleColorMenu,
                toggleFontMenu,
                toggleMoreMenu,
            }}
        >
            {children}
        </ArticleMenusContext.Provider>
    );
};
