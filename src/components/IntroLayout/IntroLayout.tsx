import './IntroLayout.scss';
import BackBar from '../BackBar';
import { Outlet } from 'react-router-dom';

const IntroLayout = () => {
    return (
        <>
            <BackBar />
            <Outlet />
        </>
    );
};

export default IntroLayout;
