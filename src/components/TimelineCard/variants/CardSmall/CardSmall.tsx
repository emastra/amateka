import { Link } from 'react-router-dom';
import './CardSmall.scss';

const IMAGE_BASE_URL = '/src/assets/images/';

const CardSmall = ({ data: { date, image, title, tags } }) => {
    // const imageUrl = image ? IMAGE_BASE_URL + image : IMAGE_BASE_URL + 'placeholder_image.jpg';
    const imageUrl = IMAGE_BASE_URL + (image || 'placeholder_image.jpg');

    return (
        <article id='card-small'>
            <Link to={`/test/${'1'}/article/${'1'}`} className='anchor-wrapper'>
                <div className='card-left-wrap'>
                    <div className='card-date'>{date}</div>
                    <img className='card-image' src={imageUrl} alt='card_image' />
                </div>

                <div className='card-right-wrap'>
                    <div className='card-title-wrap'>
                        <h2>{title}</h2>
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

export default CardSmall;

// interface CardSmallProps {
//     date: string;
//     image: string;
//     title: string;
//     tags: string[];
// }
// const CardSmall: React.FC<CardSmallProps> = ({ date, image, title, tags }) => {
