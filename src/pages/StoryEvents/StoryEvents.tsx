import './StoryEvents.scss';
import { useParams } from 'react-router-dom';

const StoryEvents = () => {
    const { id } = useParams();
    console.log('useparams: id:', id);

    return (
        <main id='story-events'>
            <div>story events!!</div>
        </main>
    );
};

export default StoryEvents;
