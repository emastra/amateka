import './Home.scss';
import { useOutletContext, Link } from 'react-router-dom';

import StoryCard from '../../components/StoryCard';
import MainMenu from '../../components/MainMenu';
import SortMenu from '../../components/SortMenu';
import FilterMenu from '../../components/FilterMenu';

const stories = [
    {
        id: 'st-01',
        image: 'artistic-collage-portraits.png',
        title: 'Contemporary World History',
        text: "In the sweeping expanse of history from the end of World War II to the present day, our world has undergone transformations that are both profound and complex. 'A Connected World: The Global Journey from Post-War to Digital Age' offers an engaging and insightful exploration of these dynamic times, weaving together the threads of political upheavals, cultural revolutions, technological advancements, and social transformations.",
        tags: ['Test', 'World', 'History'],
    },
    {
        id: 'st-02',
        image: 'math-components.png',
        title: 'History of Math',
        text: 'Welcome, traveler, on a journey through the ages, exploring the rich and fascinating history of mathematics. In "Numbers Through Time: A Journey in the History of Mathematics," we embark on an enlightening expedition that transcends time and culture, unveiling the story of mathematics and its profound impact on our world.',
        tags: ['Mathematics', 'History', 'Test'],
    },
    {
        id: 'st-03',
        image: 'hiphop-elements.png',
        title: 'History of Hip Hop Culture',
        text: "In the heart of New York's vibrant boroughs in the 1970s, a revolution was brewing, one that would echo across the globe and shape generations to come. This was not a revolution fought with guns and speeches, but with beats, words, moves, and art. It was the birth of hip hop culture, a dynamic and expressive force born from the struggles and creativity of African American and Latino communities.",
        tags: ['Hip Hop', 'Test'],
    },
];

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
                {stories.map((data) => (
                    <StoryCard key={data.id} data={data}></StoryCard>
                ))}
            </main>
            <Link className='create-btn' to={`/editor`}>
                <img className='plus-icon' src='/src/assets/svg/plus.svg' alt='plus' />
                Crea
            </Link>
        </>
    );
};

export default Home;
