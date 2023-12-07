import './StoryConcepts.scss';
import { useOutletContext } from 'react-router-dom';

import TimelineCard from '../../components/TimelineCard/TimelineCard';

interface IConcept {
    id: string;
    date: string;
    image: string;
    title: string;
    subtitle: string;
    description: string;
    tags: string[];
    content: any;
}

const StoryConcepts = () => {
    const { storyData } = useOutletContext<any>();
    const concepts: IConcept[] = storyData.content.concepts;

    return (
        <main id='story-events'>
            {/* <TimelineCard variant='large' data={{ title, subtitle, description, tags }} /> */}

            {concepts.map((concept) => {
                return <TimelineCard variant='large' key={concept.id} data={concept} />;
            })}
        </main>
    );
};

export default StoryConcepts;
