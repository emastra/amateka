import { Link } from 'react-router-dom';
import './CardSmall.scss';

interface CardSmallProps {
    image: string;
    title: string;
    tags: object[];
}

const CardSmall: React.FC<CardSmallProps> = ({ image, title, tags }) => {
    console.log(image, title, tags);

    return (
        <article id='card-small'>
            <Link to={`/test/${'1'}`} className='anchor-wrapper'>
                <div className='card-left-wrap'>
                    <div className='card-date'>5 Jan 1978</div>
                    {!!image ? (
                        <img
                            className='card-image'
                            src='/src/assets/images/placeholder_image.jpg'
                            alt='placeholder_image'
                        />
                    ) : (
                        <div className='colored-rectangle'></div>
                    )}
                </div>

                <div className='card-right-wrap'>
                    <div className='card-title-wrap'>
                        <h2>Annuncio di Augusto Pinochet sul ritorno alle urne.</h2>
                    </div>

                    <div className='tags-wrap'>
                        <div className='tag-box'>Santiago</div>
                    </div>
                </div>
            </Link>
        </article>
    );
};

export default CardSmall;
