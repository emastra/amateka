import './Home.scss';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { getFirebase } from '../../firebase';
import { collection, getDocs } from 'firebase/firestore';

import StoryCard from '../../components/StoryCard';

const { firestore } = getFirebase(); // , auth

const Home = () => {
    const [loading, setLoading] = useState(true);
    const [stories, setStories] = useState<any>(null);

    const storiesCol = collection(firestore, 'stories');

    useEffect(() => {
        getDocs(storiesCol)
            .then((snapshot) => {
                setStories(
                    snapshot.docs.map((d) => {
                        return { id: d.id, ...d.data() };
                    })
                );

                setLoading(false);
            })
            .catch((err) => {
                setLoading(false);
                console.error(err);
            });
    }, []);

    return (
        <>
            <main id='home'>
                {!loading &&
                    stories.map((story) => {
                        console.log('story', story);
                        return <StoryCard key={story.id} data={story}></StoryCard>;
                    })}

                <Link className='create-btn' to={`/create`}>
                    <img className='plus-icon' src='/src/assets/svg/plus.svg' alt='plus' />
                    <span>Crea</span>
                </Link>
            </main>
        </>
    );
};

export default Home;
