import { Link } from 'react-router-dom';
import './CardLarge.scss';

const CardLarge = ({ data }) => {
    return (
        <article id='card-large'>
            <Link to={`/story/${'1'}/article/${data.id}`} className='anchor-wrapper'>
                {/* TODO: non dovrei chiamarla card-image-wrapper, ma card-top-box-wrapper */}
                {/* potrei mette lo stile reduced nell'altro comp se lo faccio */}
                <div className={`card-image-wrapper ${!!data.image ? '' : 'reduced'}`}>
                    {data.date && <div className='card-date'>{data.date}</div>}
                    {/* TODO: non dovrei chiamarla card-top-image, ma card-top-box */}
                    {data.image && <img className='card-top-image' src={data.image} alt='placeholder_image' />}
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
                        <p className='intro-text'>{data.introText}</p>
                    </div>

                    <div className='tags-wrapper'>
                        {data.tags.map((tag) => (
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
