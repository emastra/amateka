import './StoryConcepts.scss';
import { useParams } from 'react-router-dom';

import TimelineCard from '../../components/TimelineCard/TimelineCard';

import jsondata from '../../mockdata/storia_contemporanea.json';

const StoryConcepts = () => {
    const { id } = useParams();
    console.log('useparams: id:', id);
    console.log('jsondata:', jsondata);

    const concepts = jsondata.content.concepts;
    console.log('concepts:', concepts);

    // const title = 'Il delitto Matteotti';
    // const subtitle = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';
    // const description =
    //     'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ut turpis eget nunc volutpat vulputate quis non nulla. Cras non euismod.';
    // const tags = ['Santiago', 'Test'];

    return (
        <main id='story-events'>
            {/* <TimelineCard variant='large' data={{ title, subtitle, description, tags }} /> */}

            {jsondata.content.concepts.map((concept) => {
                return <TimelineCard key={concept.id} variant='large' data={concept} />;
            })}
        </main>
    );
};

export default StoryConcepts;
