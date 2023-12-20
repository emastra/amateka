import './StoryEvents.scss';
import { useParams, useOutletContext } from 'react-router-dom';

import TimelineCard from '../../components/TimelineCard/TimelineCard';

import useStoryContext from '../../hooks/useStoryContext';

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
    // const { storyData } = useOutletContext<any>();
    // const events: IEvent[] = storyData.content.events;
    // console.log('!!! events', events);

    const storyData = useStoryContext();
    console.log('##!! storyData:', storyData);

    return (
        <main id='story-events'>
            test
            {/* {events.map((ev) => (
                <TimelineCard
                    variant='small'
                    key={ev.id}
                    data={{ date: ev.date, image: ev.image, title: ev.title, tags: ev.tags }}
                />
            ))} */}
        </main>
    );
};

export default StoryEvents;
