import { useState, useEffect } from 'react';
import useStoryContext from '../../hooks/useStoryContext';

import StoryLayout from '../../components/StoryLayout/StoryLayout';

const StoryContainer = () => {
    const storyData = useStoryContext();
    console.log('##!! storyData:', storyData);

    const [links, setLinks] = useState(null);

    useEffect(() => {
        if (storyData) {
            setLinks(
                storyData.sections.map((section) => {
                    return { name: section.id, to: `/story/${storyData.id}/content/${section.id}` };
                })
            );
        }
    }, [storyData]);

    return <StoryLayout links={links}></StoryLayout>;
};

export default StoryContainer;
