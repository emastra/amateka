import './StoryConcepts.scss';
import { useParams } from 'react-router-dom';

import TimelineCard from '../../components/TimelineCard/TimelineCard';

import jsondata from '../../mockdata/contemporary_world_history.json';

const StoryConcepts = () => {
    const { id } = useParams();
    console.log('useparams: id:', id);
    console.log('jsondata:', jsondata);

    const concepts = jsondata.content.concepts;
    console.log('concepts:', concepts);

    return (
        <main id='story-events'>
            {/* <TimelineCard variant='large' data={{ title, subtitle, description, tags }} /> */}

            {jsondata.content.concepts.map((concept) => {
                return <TimelineCard key={concept.id} variant='large' data={concept} />;
            })}
        </main>
    );
};

export default StoryConcepts;
