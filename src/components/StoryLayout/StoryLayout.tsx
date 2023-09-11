import './StoryLayout.scss';
import { Outlet } from 'react-router-dom';

import StoryBar from '../StoryBar/StoryBar';

const StoryLayout = () => {
    return (
        <>
            <StoryBar />
            <Outlet />
            <div>test 2</div>
        </>
    );
};

export default StoryLayout;
