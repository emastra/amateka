import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import useStoryContext from '../../hooks/useStoryContext';

import StoryLayout from '../../components/StoryLayout/StoryLayout';

// const StoryScreen = ({sectionName}) => {
//     if (sectionName === 'events') {
//         return ();
//     }
// }

const StoryContainer = () => {
    const { sectionName } = useParams();
    console.log('# sectionName:', sectionName);

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
