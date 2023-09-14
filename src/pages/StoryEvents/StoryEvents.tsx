import './StoryEvents.scss';
import { useParams } from 'react-router-dom';

import TimelineCard from '../../components/TimelineCard/TimelineCard';

const StoryEvents = () => {
    const { id } = useParams();
    console.log('useparams: id:', id);

    const date = '5 Jan 1978';
    const image = '/src/assets/images/placeholder_image.jpg';
    const noimage = null;
    const title = 'Annuncio di Augusto Pinochet sul ritorno alle urne.';
    const tags = ['Santiago'];

    return (
        <main id='story-events'>
            <TimelineCard variant='small' data={{ date, image, title, tags }} />
            <TimelineCard variant='small' data={{ date, image: noimage, title, tags }} />
            <TimelineCard variant='small' data={{ date, image, title, tags }} />
            <TimelineCard variant='small' data={{ date, image: noimage, title, tags }} />
            <TimelineCard variant='small' data={{ date, image, title, tags }} />
            <TimelineCard variant='small' data={{ date, image: noimage, title, tags }} />
            <TimelineCard variant='small' data={{ date, image, title, tags }} />
        </main>
    );
};

export default StoryEvents;
