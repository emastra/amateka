import './StoryContainer.scss';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import useStoryContext from '../../hooks/useStoryContext';

import StoryLayout from '../../components/StoryLayout/StoryLayout';
import StoryScreen from '../StoryScreen/StoryScreen';

const StoryContainer = () => {
    const { sectionName } = useParams();
    const storyData = useStoryContext();

    const [links, setLinks] = useState(null);

    useEffect(() => {
        if (storyData) {
            setLinks(
                storyData.sections.map((section) => {
                    return { name: section.id, to: `/story/${storyData.id}/screen/${section.id}` };
                })
            );
        }
    }, [storyData]);

    return (
        <StoryLayout links={links}>
            <main id='story-container'>
                <StoryScreen sectionName={sectionName} sections={storyData?.sections} />
            </main>
        </StoryLayout>
    );
};

export default StoryContainer;
