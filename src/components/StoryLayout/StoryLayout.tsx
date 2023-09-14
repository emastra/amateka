import './StoryLayout.scss';
import { Outlet } from 'react-router-dom';

import StoryBar from '../StoryBar/StoryBar';
import StoryBottomBar from '../StoryBottomBar/StoryBottomBar';
import StoryTimeMenu from '../StoryTimeMenu/StoryTimeMenu';

const StoryLayout = () => {
    return (
        <>
            <StoryBar />
            <StoryTimeMenu />
            <Outlet />
            <StoryBottomBar />
        </>
    );
};

export default StoryLayout;
