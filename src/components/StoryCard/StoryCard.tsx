import { Link } from 'react-router-dom';
import './StoryCard.scss';

const StoryCard = () => {
    return (
        <article className='story-card'>
            <Link to={`/story/${'1'}/intro`}>
                <img
                    className='card-top-image'
                    src='/src/assets/images/placeholder_image.jpg'
                    alt='placeholder_image'
                />
                <div className='card-info-wrapper'>
                    <div className='card-title-wrapper'>
                        <h2>Storia Contemporanea</h2>
                    </div>

                    <div className='intro-text-wrapper'>
                        <p className='intro-text'>
                            Wikipedia remix. Wikipedia remix. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Wikipedia remix.
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
