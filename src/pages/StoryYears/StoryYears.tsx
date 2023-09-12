import './StoryYears.scss';
import { useParams } from 'react-router-dom';

import TimelineCard from '../../components/TimelineCard/TimelineCard';

const StoryYears = () => {
    const { id } = useParams();
    console.log('useparams: id:', id);

    return (
        <main id='story-events'>
            <TimelineCard variant='medium' />
            <TimelineCard variant='medium' />
            <TimelineCard variant='medium' />
            <TimelineCard variant='medium' />
            <TimelineCard variant='medium' />
            <TimelineCard variant='medium' />
            <TimelineCard variant='medium' />
            <TimelineCard variant='medium' />
        </main>
    );
};

export default StoryYears;
