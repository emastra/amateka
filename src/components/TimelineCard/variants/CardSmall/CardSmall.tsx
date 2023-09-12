import { Link } from 'react-router-dom';
import './CardSmall.scss';

const CardSmall = () => {
    return (
        <article id='card-small'>
            <Link to={`/test/${'1'}`} className='anchor-wrapper'>
                <img className='card-image' src='/src/assets/images/placeholder_image.jpg' alt='placeholder_image' />
                <div className='card-info-wrapper'>
                    <div className='card-title-wrapper'>
                        <h2>Storia Contemporanea Storia Contranea Stia Coranea Stoia Contoranea</h2>
                    </div>

                    <div className='tags-wrapper'>
                        <div className='tag-box'>A tag 1</div>
                        <div className='tag-box'>Tag tag 2</div>
                        {/* <div className='tag-box'>Third tag</div> */}
                    </div>
                </div>
            </Link>
        </article>
    );
};

export default CardSmall;
