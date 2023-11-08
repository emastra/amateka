import './StoryEvents.scss';
import { useParams } from 'react-router-dom';

import TimelineCard from '../../components/TimelineCard/TimelineCard';

// TODO: write types for data, different for each timelinecard variant

const StoryEvents = () => {
    const { id } = useParams();
    console.log('useparams: id:', id);

    const date = '5 Jan 1978';
    const image = '/src/assets/images/placeholder_image.jpg';
    const image2 = '/src/assets/images/ann-ann.jpg';
    const image3 = '/src/assets/images/martin-luther-king.jpg';
    const title = 'Annuncio di Augusto Pinochet sul ritorno alle urne.';
    const tags = ['Santiago'];

    return (
        <main id='story-events'>
            <TimelineCard variant='small' data={{ date, image, title, tags }} />
            <TimelineCard variant='small' data={{ date, image: null, title, tags }} />
            <TimelineCard variant='small' data={{ date, image: image2, title, tags }} />
            <TimelineCard variant='small' data={{ date, image: image3, title, tags }} />
            <TimelineCard variant='small' data={{ date, image, title, tags }} />
            <TimelineCard variant='small' data={{ date, image: null, title, tags }} />
            <TimelineCard variant='small' data={{ date, image, title, tags }} />
        </main>
    );
};

export default StoryEvents;
