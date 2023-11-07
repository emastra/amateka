import { Link } from 'react-router-dom';
import './StoryCard.scss';

const StoryCard = ({ imgurl }) => {
    return (
        <article className='story-card'>
            <Link to={`/story/${'1'}/intro`}>
                <div className='card-image-wrapper'>
                    <img className='card-top-image' src={imgurl} alt='story-image' />
                </div>

                <div className='card-info-wrapper'>
                    <div className='card-title-wrapper'>
                        <h2>Storia Contemporanea aorem ipsum</h2>
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
