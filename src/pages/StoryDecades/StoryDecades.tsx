import './StoryDecades.scss';
import { useParams } from 'react-router-dom';

import TimelineCard from '../../components/TimelineCard/TimelineCard';

const StoryDecades = () => {
    const { id } = useParams();
    console.log('useparams: id:', id);

    return (
        <main id='story-events'>
            <TimelineCard variant='large' />
            <TimelineCard variant='large' />
            <TimelineCard variant='large' />
            <TimelineCard variant='large' />
            <TimelineCard variant='large' />
            <TimelineCard variant='large' />
            <TimelineCard variant='large' />
            <TimelineCard variant='large' />
        </main>
    );
};

export default StoryDecades;
