import './IntroLayout.scss';
import { Outlet } from 'react-router-dom';

// create BackBar

const IntroLayout = () => {
    return (
        <>
            {/* <BackBar /> */}
            <Outlet />
        </>
    );
};

export default IntroLayout;
