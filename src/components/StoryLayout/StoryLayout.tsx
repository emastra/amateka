import './StoryLayout.scss';
import { Outlet } from 'react-router-dom';

import StoryBar from '../StoryBar/StoryBar';
import StoryBottomBar from '../StoryBottomBar/StoryBottomBar';

const StoryLayout = () => {
    return (
        <>
            <StoryBar />
            <Outlet />
            <StoryBottomBar />
        </>
    );
};

export default StoryLayout;
