import './StoryEvents.scss';
import { useParams } from 'react-router-dom';

import TimelineCard from '../../components/TimelineCard/TimelineCard';

const StoryEvents = () => {
    const { id } = useParams();
    console.log('useparams: id:', id);

    return (
        <main id='story-events'>
            <TimelineCard variant='small' />
            <TimelineCard variant='small' />
        </main>
    );
};

export default StoryEvents;
