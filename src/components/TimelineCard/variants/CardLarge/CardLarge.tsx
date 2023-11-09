import { Link } from 'react-router-dom';
import './CardLarge.scss';

const CardLarge = ({ data: { date, image, title, subtitle, description, tags } }) => {
    return (
        <article id='card-large'>
            <Link to={`/story/${'1'}/article/${'1'}`} className='anchor-wrapper'>
                {/* TODO: non dovrei chiamarla card-image-wrapper, ma card-top-box-wrapper */}
                {/* potrei mette lo stile reduced nell'altro comp se lo faccio */}
                <div className={`card-image-wrapper ${!!image ? '' : 'reduced'}`}>
                    {date && <div className='card-date'>{date}</div>}
                    {/* TODO: non dovrei chiamarla card-top-image, ma card-top-box */}
                    {image && <img className='card-top-image' src={image} alt='placeholder_image' />}
                </div>

                <div className='card-info-wrapper'>
                    <div className='card-title-wrapper'>
                        <h2>{title}</h2>
                    </div>
                    <div className='card-subtitle-wrapper'>
                        {subtitle && <div className='subtitle'>{subtitle}</div>}
                    </div>

                    {/* add extended. O faccio un altro comp tipo CardLargeNoImage...hmm... */}
                    <div className='intro-text-wrapper'>
                        <p className='intro-text'>{description} wefqf fqdfq fqwdfq fdqwdfqw fqwfqwe fqwf qfqwfq</p>
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
