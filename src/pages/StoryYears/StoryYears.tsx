import './StoryYears.scss';
import { useOutletContext } from 'react-router-dom';

import TimelineCard from '../../components/TimelineCard/TimelineCard';

interface IYear {
    id: string;
    date: string;
    image: string;
    title: string;
    intro: string;
    tags: string[];
}

const StoryYears = () => {
    const { storyData } = useOutletContext<any>();
    const years: IYear[] = storyData.content.years;

    return (
        <main id='story-events'>
            {years.map((year) => (
                <TimelineCard
                    variant='medium'
                    key={year.id}
                    data={{
                        date: year.date,
                        image: year.image,
                        title: year.title,
                        description: year.intro,
                        tags: year.tags,
                    }}
                />
            ))}

            {/* <TimelineCard variant='medium' data={{ date, image, title, description, tags }} />
            <TimelineCard variant='medium' data={{ date, image: null, title, description, tags }} />
            <TimelineCard variant='medium' data={{ date, image: image2, title, description, tags }} />
            <TimelineCard variant='medium' data={{ date, image: image3, title, description, tags }} />
            <TimelineCard variant='medium' data={{ date, image: null, title, description, tags }} />
            <TimelineCard variant='medium' data={{ date, image, title, description, tags }} /> */}
        </main>
    );
};

export default StoryYears;
