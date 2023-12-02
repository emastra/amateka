import './MainLayout.scss';
import { useState } from 'react';
import { Outlet } from 'react-router-dom';

import Topbar from '../Topbar/Topbar';
import SearchBar from '../SearchBar/SearchBar';

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
