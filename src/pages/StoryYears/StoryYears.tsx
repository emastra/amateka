import './StoryYears.scss';
import { useParams } from 'react-router-dom';

import TimelineCard from '../../components/TimelineCard/TimelineCard';

const StoryYears = () => {
    const { id } = useParams();
    console.log('useparams: id:', id);

    const date = '1978';
    const image = '/src/assets/images/placeholder_image.jpg';
    const image2 = '/src/assets/images/ann-ann.jpg';
    const image3 = '/src/assets/images/martin-luther-king.jpg';
    const title = 'Un anno tenebroso.';
    const description =
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ut turpis eget nunc volutpat vulputate quis non nulla. Cras non euismod.';
    const tags = ['Santiago'];

    return (
        <main id='story-events'>
            <TimelineCard variant='medium' data={{ date, image, title, description, tags }} />
            <TimelineCard variant='medium' data={{ date, image: null, title, description, tags }} />
            <TimelineCard variant='medium' data={{ date, image: image2, title, description, tags }} />
            <TimelineCard variant='medium' data={{ date, image: image3, title, description, tags }} />
            <TimelineCard variant='medium' data={{ date, image: null, title, description, tags }} />
            <TimelineCard variant='medium' data={{ date, image, title, description, tags }} />
        </main>
    );
};

export default StoryYears;
