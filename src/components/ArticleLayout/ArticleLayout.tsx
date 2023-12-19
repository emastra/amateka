import './ArticleLayout.scss';
import { useState } from 'react';
import { Outlet } from 'react-router-dom';

import BackBar from '../BackBar';
import ArticleBottomBar from '../ArticleBottomBar/ArticleBottomBar';

import ContentMenu from '../../components/ContentMenu/ContentMenu';
import ColorMenu from '../../components/ColorMenu/ColorMenu';
import FontMenu from '../../components/FontMenu/FontMenu';

const ArticleLayout = () => {
    const [isContentMenuOpen, setContentMenuOpen] = useState(false);
    const [isColorMenuOpen, setColorMenuOpen] = useState(false);
    const [isFontMenuOpen, setFontMenuOpen] = useState(false);
    const [isMoreMenuOpen, setMoreMenuOpen] = useState(false);

    const toggleBodyScroll = (shouldScroll) => {
        document.body.style.overflow = shouldScroll ? 'auto' : 'hidden';
    };

    const toggleContentMenu = () => {
        setColorMenuOpen(false);
        setFontMenuOpen(false);
        setMoreMenuOpen(false);
        toggleBodyScroll(isContentMenuOpen);
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
        <>
            {isContentMenuOpen && <ContentMenu toggleContentMenu={toggleContentMenu} />}
            {isColorMenuOpen && <ColorMenu toggleColorMenu={toggleColorMenu} />}
            {isFontMenuOpen && <FontMenu toggleFontMenu={toggleFontMenu} />}
            {/* More Menu */}

            <BackBar />
            <Outlet />
            <ArticleBottomBar
                toggleContentMenu={toggleContentMenu}
                toggleColorMenu={toggleColorMenu}
                toggleFontMenu={toggleFontMenu}
                toggleMoreMenu={toggleMoreMenu}
            />
        </>
    );
};

export default ArticleLayout;
