import StoryCard from '../../components/StoryCard';
import MainMenu from '../../components/MainMenu';
import SortMenu from '../../components/SortMenu';
import FilterMenu from '../../components/FilterMenu';

import './Home.scss';

const Home = () => {
    return (
        <>
            <MainMenu />
            <SortMenu />
            <FilterMenu />
            <main id='home'>
                <StoryCard imgurl='/src/assets/images/artistic-collage-portraits.png'></StoryCard>
                <StoryCard imgurl='/src/assets/images/ann-ann.jpg'></StoryCard>
                <StoryCard imgurl='/src/assets/images/martin-luther-king.jpg'></StoryCard>
                <StoryCard imgurl='/src/assets/images/placeholder_image.jpg'></StoryCard>
            </main>
            <button className='create-btn'>
                <img className='plus-icon' src='/src/assets/svg/plus.svg' alt='plus' />
                Crea
            </button>
        </>
    );
};

export default Home;
