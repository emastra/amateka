import './StoryEvents.scss';
import { useParams, useOutletContext } from 'react-router-dom';

import TimelineCard from '../../components/TimelineCard/TimelineCard';

// TODO: write types for data, different for each timelinecard variant
interface IEvent {
    id: string;
    image: string;
    date: string;
    title: string;
    tags: string[];
    content?: any;
    description?: any;
}

const StoryEvents = () => {
    const { storyData } = useOutletContext<any>();
    const events: IEvent[] = storyData.content.events;
    console.log('!!! events', events);

    return (
        <main id='story-events'>
            {events.map((ev) => (
                <TimelineCard
                    variant='small'
                    key={ev.id}
                    data={{ date: ev.date, image: ev.image, title: ev.title, tags: ev.tags }}
                />
            ))}

            {/* <TimelineCard variant='small' data={{ date, image, title, tags }} />
            <TimelineCard variant='small' data={{ date, image: null, title, tags }} />
            <TimelineCard variant='small' data={{ date, image: image2, title, tags }} />
            <TimelineCard variant='small' data={{ date, image: image3, title, tags }} />
            <TimelineCard variant='small' data={{ date, image, title, tags }} />
            <TimelineCard variant='small' data={{ date, image: null, title, tags }} />
            <TimelineCard variant='small' data={{ date, image, title, tags }} /> */}
        </main>
    );
};

export default StoryEvents;
