import { Link, useNavigate } from 'react-router-dom';
import './StoryCard.scss';

const IMAGE_BASE_URL = '/src/assets/images/';

const StoryCard = ({ data }) => {
    const navigate = useNavigate();

    console.log('!!! from storycard !!! data:', data);
    const { id, image, title, description, tags, intro } = data;
    const imageUrl = image ? IMAGE_BASE_URL + image : IMAGE_BASE_URL + 'placeholder_image.jpg';

    const handleNavigate = () => {
        navigate(`/story/${id}/intro`, { state: { currentStory: { id, image, title, intro } } });
    };

    return (
        <article className='story-card' onClick={handleNavigate}>
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
        </article>
    );
};

export default StoryCard;
