import { Link } from 'react-router-dom';
import './StoryCard.scss';

const IMAGE_BASE_URL = '/src/assets/images/';

const StoryCard = ({ data }) => {
    console.log('!!! from storycard !!! data:', data);
    const { id, image, title, description, tags } = data;
    const imageUrl = image ? IMAGE_BASE_URL + image : IMAGE_BASE_URL + 'placeholder_image.jpg';

    return (
        <article className='story-card'>
            <Link to={`/story/${id}/intro`}>
                <div className='card-image-wrapper'>
                    <div className='interaction-wrapper'>
                        <div className='icon-wrapper'>
                            <img className='share-icon' src='/src/assets/svg/share.svg' alt='share' />
                        </div>
                        <div className='icon-wrapper'>
                            <img className='favorite-icon' src='/src/assets/svg/heart.svg' alt='save' />
                        </div>
                    </div>

                    <img className='card-top-image' src={imageUrl} alt='story-image' />
                </div>

                <div className='card-info-wrapper'>
                    <div className='card-title-wrapper'>
                        <h2>{title}</h2>
                    </div>

                    <div className='intro-text-wrapper'>
                        <p className='intro-text'>{description}</p>
                    </div>

                    <div className='tags-wrapper'>
                        {tags.map((tag) => (
                            <div key={tag} className='tag-box'>
                                {tag}
                            </div>
                        ))}
                    </div>
                </div>
            </Link>
        </article>
    );
};

export default StoryCard;
