import './Home.scss';
import { useOutletContext, Link } from 'react-router-dom';

import StoryCard from '../../components/StoryCard';
import MainMenu from '../../components/MainMenu';
import SortMenu from '../../components/SortMenu';
import FilterMenu from '../../components/FilterMenu';

interface MenusContextState {
    isMainMenuOpen: boolean;
    toggleMainMenu: () => void;
    isSortMenuOpen: boolean;
    toggleSortMenu: () => void;
    isFilterMenuOpen: boolean;
    toggleFilterMenu: () => void;
}

const Home = () => {
    const { isMainMenuOpen, toggleMainMenu, isSortMenuOpen, toggleSortMenu, isFilterMenuOpen, toggleFilterMenu } =
        useOutletContext<MenusContextState>();

    return (
        <>
            {isMainMenuOpen && <MainMenu toggleMainMenu={toggleMainMenu} />}
            {isSortMenuOpen && <SortMenu toggleSortMenu={toggleSortMenu} />}
            {isFilterMenuOpen && <FilterMenu toggleFilterMenu={toggleFilterMenu} />}

            <main id='home'>
                <StoryCard imgurl='/src/assets/images/artistic-collage-portraits.png'></StoryCard>
                <StoryCard imgurl='/src/assets/images/ann-ann.jpg'></StoryCard>
                <StoryCard imgurl='/src/assets/images/martin-luther-king.jpg'></StoryCard>
                <StoryCard imgurl='/src/assets/images/placeholder_image.jpg'></StoryCard>
            </main>
            <Link className='create-btn' to={`/editor`}>
                <img className='plus-icon' src='/src/assets/svg/plus.svg' alt='plus' />
                Crea
            </Link>
        </>
    );
};

export default Home;
