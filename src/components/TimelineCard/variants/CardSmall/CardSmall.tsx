import { Link } from 'react-router-dom';
import './CardSmall.scss';

// interface CardSmallProps {
//     date: string;
//     image: string;
//     title: string;
//     tags: string[];
// }

// const CardSmall: React.FC<CardSmallProps> = ({ date, image, title, tags }) => {
const CardSmall = ({ data: { date, image, title, tags } }) => {
    console.log(date, image, title, tags);

    return (
        <article id='card-small'>
            <Link to={`/test/${'1'}`} className='anchor-wrapper'>
                <div className='card-left-wrap'>
                    <div className='card-date'>{date}</div>
                    {!!image ? <img className='card-image' src={image} alt='placeholder_image' /> : null}
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
