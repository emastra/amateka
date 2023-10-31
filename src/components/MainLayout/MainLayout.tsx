import './MainLayout.scss';
import { Outlet } from 'react-router-dom';

import Topbar from '../Topbar/Topbar';
import SearchBar from '../HomeBar/SearchBar';

const MainLayout = () => {
    return (
        <>
            <Topbar />
            <SearchBar />
            <Outlet />
        </>
    );
};

export default MainLayout;
