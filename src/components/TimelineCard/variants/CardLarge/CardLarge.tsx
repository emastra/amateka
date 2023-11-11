import { Link } from 'react-router-dom';
import './CardLarge.scss';

const CardLarge = ({ data: { id, image, date, title, subtitle, introText, tags, articleContent } }) => {
    console.log(id, image, title, subtitle, introText, tags, articleContent);

    return (
        <article id='card-large'>
            <Link to={`/story/${'1'}/article/${id}`} className='anchor-wrapper'>
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
                        <p className='intro-text'>{introText}</p>
                    </div>

                    <div className='tags-wrapper'>
                        {tags.map((tag) => (
                            <div key={tag.id} className='tag-box'>
                                {tag.name}
                            </div>
                        ))}
                    </div>
                </div>
            </Link>
        </article>
    );
};

export default CardLarge;
