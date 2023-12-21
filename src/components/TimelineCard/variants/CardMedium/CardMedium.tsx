import { Link } from 'react-router-dom';
import './CardMedium.scss';

const IMAGE_BASE_URL = '/src/assets/images/';

const CardMedium = ({ data: { date, image, title, description, tags } }) => {
    const imageUrl = IMAGE_BASE_URL + (image || 'placeholder_image.jpg');

    const handleImageError = (e) => {
        e.target.src = IMAGE_BASE_URL + 'placeholder_image.jpg';
    };

    return (
        <article id='card-medium'>
            <Link to={`/story/${'1'}/article/${'1'}`} className='anchor-wrapper'>
                <div className='card-image-wrapper'>
                    <div className='card-date'>{date}</div>
                    <img className='card-image' src={imageUrl} onError={handleImageError} alt='card_image' />
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

export default CardMedium;
