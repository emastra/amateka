// import { createContext, useState } from 'react';

// export interface IArticleMenusContext {
//     isContentMenuOpen: boolean;
//     toggleContentMenu: () => void;
//     isColorMenuOpen: boolean;
//     toggleColorMenu: () => void;
//     isFontMenuOpen: boolean;
//     toggleFontMenu: () => void;
//     isMoreMenuOpen: boolean;
//     toggleMoreMenu: () => void;
// }

// export const ArticleMenusContext = createContext<IArticleMenusContext | undefined>(undefined);

// export const ArticleMenusProvider = ({ children }) => {
//     // const [isContentMenuOpen, setContentMenuOpen] = useState(false);
//     // const [isColorMenuOpen, setColorMenuOpen] = useState(false);
//     // const [isFontMenuOpen, setFontMenuOpen] = useState(false);
//     // const [isMoreMenuOpen, setMoreMenuOpen] = useState(false);

//     // const toggleBodyScroll = (shouldScroll) => {
//     //     document.body.style.overflow = shouldScroll ? 'auto' : 'hidden';
//     // };

//     // const toggleContentMenu = () => {
//     //     setColorMenuOpen(false);
//     //     setFontMenuOpen(false);
//     //     setMoreMenuOpen(false);
//     //     toggleBodyScroll(isContentMenuOpen);
//     //     setContentMenuOpen(!isContentMenuOpen);
//     // };

//     // const toggleColorMenu = () => {
//     //     setContentMenuOpen(false);
//     //     setFontMenuOpen(false);
//     //     setMoreMenuOpen(false);
//     //     setColorMenuOpen(!isColorMenuOpen);
//     // };

//     // const toggleFontMenu = () => {
//     //     setContentMenuOpen(false);
//     //     setColorMenuOpen(false);
//     //     setMoreMenuOpen(false);
//     //     setFontMenuOpen(!isFontMenuOpen);
//     // };

//     // const toggleMoreMenu = () => {
//     //     setContentMenuOpen(false);
//     //     setColorMenuOpen(false);
//     //     setFontMenuOpen(false);
//     //     setMoreMenuOpen(!isMoreMenuOpen);
//     // };

//     // const contextValue: IArticleMenusContext = {
//     //     isContentMenuOpen,
//     //     isColorMenuOpen,
//     //     isFontMenuOpen,
//     //     isMoreMenuOpen,
//     //     toggleContentMenu,
//     //     toggleColorMenu,
//     //     toggleFontMenu,
//     //     toggleMoreMenu,
//     // };

//     return <ArticleMenusContext.Provider value={contextValue}>{children}</ArticleMenusContext.Provider>;
// };
