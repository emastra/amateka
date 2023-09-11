import './StoryLayout.scss';
import { Outlet } from 'react-router-dom';

const StoryLayout = () => {
    return (
        <>
            <div>test 1</div>
            <Outlet />
            <div>test 2</div>
        </>
    );
};

export default StoryLayout;
