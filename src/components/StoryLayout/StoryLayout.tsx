import './StoryLayout.scss';
// import { useState, useEffect } from 'react';
import { useParams, Outlet } from 'react-router-dom';

import StoryBar from '../StoryBar/StoryBar';
import StoryBottomBar from '../StoryBottomBar/StoryBottomBar';

const StoryLayout = ({ links, children }) => {
    return (
        <>
            <StoryBar />
            {children}
            <StoryBottomBar links={links} />
        </>
    );
};

export default StoryLayout;
