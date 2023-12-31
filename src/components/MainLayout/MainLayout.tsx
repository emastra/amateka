import './MainLayout.scss';
import { useState } from 'react';
import { Outlet } from 'react-router-dom';

import MainMenu from '../../components/MainMenu';
import SortMenu from '../../components/SortMenu';
import FilterMenu from '../../components/FilterMenu';

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
            {isMainMenuOpen && <MainMenu toggleMainMenu={toggleMainMenu} />}
            {isSortMenuOpen && <SortMenu toggleSortMenu={toggleSortMenu} />}
            {isFilterMenuOpen && <FilterMenu toggleFilterMenu={toggleFilterMenu} />}

            <Topbar toggleMainMenu={toggleMainMenu} />
            <SearchBar toggleSortMenu={toggleSortMenu} toggleFilterMenu={toggleFilterMenu} />
            <Outlet />
        </>
    );
};

export default MainLayout;
