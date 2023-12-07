import './StoryDecades.scss';
import { useOutletContext } from 'react-router-dom';

import TimelineCard from '../../components/TimelineCard/TimelineCard';

interface IDecade {
    id: string;
    date: string;
    image: string;
    title: string;
    intro: string;
    tags: string[];
}

const StoryDecades = () => {
    const { storyData } = useOutletContext<any>();
    const decades: IDecade[] = storyData.content.decades;

    return (
        <main id='story-events'>
            {decades.map((decade) => (
                <TimelineCard
                    variant='large'
                    key={decade.id}
                    data={{
                        date: decade.date,
                        image: decade.image,
                        title: decade.title,
                        description: decade.intro,
                        tags: decade.tags,
                    }}
                />
            ))}

            {/* <TimelineCard variant='large' data={{ date, image, title, description, tags }} />
            <TimelineCard variant='large' data={{ date, image: null, title, description, tags }} />
            <TimelineCard variant='large' data={{ date, image: image2, title, description, tags }} />
            <TimelineCard variant='large' data={{ date, image: image3, title, description, tags }} />
            <TimelineCard variant='large' data={{ date, image, title, description, tags }} />
            <TimelineCard variant='large' data={{ date, image, title, description, tags }} />
            <TimelineCard variant='large' data={{ date, image, title, description, tags }} />
            <TimelineCard variant='large' data={{ date, image, title, description, tags }} /> */}
        </main>
    );
};

export default StoryDecades;
