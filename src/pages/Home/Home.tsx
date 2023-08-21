import HomeBar from '../../components/HomeBar';
import StoryCard from '../../components/StoryCard';

import './Home.scss';

const Home = () => {
    return (
        <>
            <HomeBar />
            <main id='home'>
                <StoryCard></StoryCard>
                <StoryCard></StoryCard>
                <StoryCard></StoryCard>
            </main>
            <button className='create-btn'>
                <img className='plus-icon' src='/src/assets/svg/plus.svg' alt='plus' />
                Crea
            </button>
        </>
    );
};

export default Home;
