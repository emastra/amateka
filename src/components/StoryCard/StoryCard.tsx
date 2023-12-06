import { Link } from 'react-router-dom';
import './StoryCard.scss';

const StoryCard = ({ imgurl }) => {
    return (
        <article className='story-card'>
            <Link to={`/story/${'1'}/intro`}>
                <div className='card-image-wrapper'>
                    <div className='interaction-wrapper'>
                        <div className='icon-wrapper'>
                            <img className='share-icon' src='/src/assets/svg/share.svg' alt='share' />
                        </div>
                        <div className='icon-wrapper'>
                            <img className='favorite-icon' src='/src/assets/svg/heart.svg' alt='save' />
                        </div>
                    </div>

                    <img className='card-top-image' src={imgurl} alt='story-image' />
                </div>

                <div className='card-info-wrapper'>
                    <div className='card-title-wrapper'>
                        <h2>Contemporary World History</h2>
                    </div>

                    <div className='intro-text-wrapper'>
                        <p className='intro-text'>
                            In the sweeping expanse of history from the end of World War II to the present day, our
                            world has undergone transformations that are both profound and complex. "A Connected World:
                            The Global Journey from Post-War to Digital Age" offers an engaging and insightful
                            exploration of these dynamic times, weaving together the threads of political upheavals,
                            cultural revolutions, technological advancements, and social transformations.
                        </p>
                    </div>

                    <div className='tags-wrapper'>
                        <div className='tag-box'>A tag 1</div>
                        <div className='tag-box'>Tag tag 2</div>
                        <div className='tag-box'>Third tag</div>
                    </div>
                </div>
            </Link>
        </article>
    );
};

export default StoryCard;
