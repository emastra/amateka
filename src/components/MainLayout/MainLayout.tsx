import './MainLayout.scss';
import { useState } from 'react';
import { Outlet } from 'react-router-dom';

import Topbar from '../Topbar/Topbar';
import SearchBar from '../SearchBar/SearchBar';

// https://chat.openai.com/c/59c0726f-de38-4fe6-adf8-1dd9749199d3

const MainLayout = () => {
    const [isMainMenuOpen, setMainMenuOpen] = useState(false);
    const [isSortMenuOpen, setSortMenuOpen] = useState(false);
    const [isFilterMenuOpen, setFilterMenuOpen] = useState(false);

    const toggleMainMenu = () => setMainMenuOpen(!isMainMenuOpen);
    const toggleSortMenu = () => setSortMenuOpen(!isSortMenuOpen);
    const toggleFilterMenu = () => setFilterMenuOpen(!isFilterMenuOpen);

    return (
        <>
            <Topbar toggleMainMenu={toggleMainMenu} />
            <SearchBar toggleSortMenu={toggleSortMenu} toggleFilterMenu={toggleFilterMenu} />
            <Outlet
                context={{
                    isMainMenuOpen,
                    toggleMainMenu,
                    isSortMenuOpen,
                    toggleSortMenu,
                    isFilterMenuOpen,
                    toggleFilterMenu,
                }}
            />
        </>
    );
};

export default MainLayout;
