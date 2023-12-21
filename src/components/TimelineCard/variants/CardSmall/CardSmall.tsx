import { Link } from 'react-router-dom';
import './CardSmall.scss';

const IMAGE_BASE_URL = '/src/assets/images/';

const CardSmall = ({ data: { date, image, title, tags } }) => {
    // placeholder_image must be inside the app assets not in the cloud
    const imageUrl = image ? IMAGE_BASE_URL + image : IMAGE_BASE_URL + 'placeholder_image.jpg';

    const handleImageError = (e) => {
        // e.target.onError = null; // TODO: does not Prevent potential infinite loop.
        // https://chat.openai.com/c/aeaeb1b6-35c9-469c-b11e-366ef947287e, https://stackoverflow.com/questions/58957578/how-to-prevent-infinite-loops-when-setting-an-image-source-via-onerror-in-react
        // OR make sure placeholder_image.jpg is always present!
        e.target.src = IMAGE_BASE_URL + 'placeholder_image.jpg';
    };

    return (
        <article id='card-small'>
            <Link to={`/test/${'1'}/article/${'1'}`} className='anchor-wrapper'>
                <div className='card-left-wrap'>
                    <div className='card-date'>{date}</div>
                    <img className='card-image' src={imageUrl} onError={handleImageError} alt='card_image' />
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
