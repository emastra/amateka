import './StoryConcepts.scss';
import { useParams } from 'react-router-dom';

import TimelineCard from '../../components/TimelineCard/TimelineCard';

const StoryConcepts = () => {
    const { id } = useParams();
    console.log('useparams: id:', id);

    const title = 'Il delitto Matteotti';
    const subtitle = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';
    const description =
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ut turpis eget nunc volutpat vulputate quis non nulla. Cras non euismod.';
    const tags = ['Santiago', 'Test'];

    return (
        <main id='story-events'>
            <TimelineCard variant='large' data={{ title, subtitle, description, tags }} />
        </main>
    );
};

export default StoryConcepts;
