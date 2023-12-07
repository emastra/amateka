import './StoryLayout.scss';
import { useState, useEffect } from 'react';
import { useParams, Outlet } from 'react-router-dom';

import StoryBar from '../StoryBar/StoryBar';
import StoryBottomBar from '../StoryBottomBar/StoryBottomBar';

const storymap = {
    'st-01': 'contemporary_world_history',
    'st-02': 'history_of_math',
    'st-03': 'history_of_hiphop_culture',
};

const StoryLayout = () => {
    const { id } = useParams();
    if (!id) return;

    const [loading, setLoading] = useState(true);
    const [storyData, setStoryData] = useState<any>(null);

    useEffect(() => {
        fetch(`/src/mockdata/${storymap[id]}.json`)
            .then((res) => res.json())
            .then((data) => {
                setStoryData(data);
                console.log('# data:', data);
                setLoading(false);
            })
            .catch((err) => {
                console.log(err);
                setLoading(false);
            });
    }, []);

    return (
        <>
            {!loading && storyData && (
                <>
                    <StoryBar />
                    <Outlet context={{ storyData }} />
                    <StoryBottomBar />
                </>
            )}
        </>
    );
};

export default StoryLayout;
