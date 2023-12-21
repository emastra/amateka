import { Link, useParams, useNavigate } from 'react-router-dom';
import './CardLarge.scss';

const IMAGE_BASE_URL = '/src/assets/images/';

const CardLarge = ({ data }) => {
    const { id } = useParams();
    console.log('## data', id, data);
    const navigate = useNavigate();

    const imageUrl = IMAGE_BASE_URL + (data.image || 'placeholder_image.jpg');

    const handleNavigate = () => {
        navigate(`/story/${id}/article/${data.id}`, { state: { articleData: data } });
    };

    const handleImageError = (e) => {
        e.target.src = IMAGE_BASE_URL + 'placeholder_image.jpg';
    };

    return (
        <article id='card-large' onClick={handleNavigate}>
            {/* TODO: non dovrei chiamarla card-image-wrapper, ma card-top-box-wrapper */}
            {/* potrei mette lo stile reduced nell'altro comp se lo faccio */}
            <div className={`card-image-wrapper ${!!data.image ? '' : 'reduced'}`}>
                {data.date && <div className='card-date'>{data.date}</div>}
                <img className='card-image' src={imageUrl} onError={handleImageError} alt='card_image' />
            </div>

            <div className='card-info-wrapper'>
                <div className='card-title-wrapper'>
                    <h2>{data.title}</h2>
                </div>
                <div className='card-subtitle-wrapper'>
                    {data.subtitle && <div className='subtitle'>{data.subtitle}</div>}
                </div>

                {/* add extended. O faccio un altro comp tipo CardLargeNoImage...hmm... */}
                <div className='intro-text-wrapper'>
                    <p className='intro-text'>{data.description}</p>
                </div>

                <div className='tags-wrapper'>
                    {data.tags.map((tag) => (
                        <div key={tag} className='tag-box'>
                            {tag}
                        </div>
                    ))}
                </div>
            </div>
        </article>
    );
};

export default CardLarge;
