import StoryCard from '../../components/StoryCard';
import Menu from '../../components/Menu/Menu';
import SortMenu from '../../components/SortMenu/SortMenu';
import FilterMenu from '../../components/FilterMenu/FilterMenu';

import './Home.scss';

const Home = () => {
    return (
        <>
            <Menu />
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
