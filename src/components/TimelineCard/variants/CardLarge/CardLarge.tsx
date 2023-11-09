import { Link } from 'react-router-dom';
import './CardLarge.scss';

const CardLarge = ({ data: { date, image, title, tags } }) => {
    return (
        <article id='card-large'>
            <Link to={`/story/${'1'}`} className='anchor-wrapper'>
                <div className='card-image-wrapper'>
                    <div className='card-date'>{date}</div>
                    {!!image ? <img className='card-top-image' src={image} alt='placeholder_image' /> : null}
                </div>

                <div className='card-info-wrapper'>
                    <div className='card-title-wrapper'>
                        <h2>{title}</h2>
                    </div>

                    <div className='intro-text-wrapper'>
                        <p className='intro-text'>
                            Wikipedia remix. Wikipedia remix. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Wikipedia remix. Lorem ipsum dolor sit amet, consectetur adipiscing elit
                        </p>
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

export default CardLarge;
