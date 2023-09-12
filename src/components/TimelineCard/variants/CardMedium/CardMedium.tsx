import { Link } from 'react-router-dom';
import './CardMedium.scss';

const CardMedium = () => {
    return (
        <article id='card-medium'>
            <Link to={`/story/${'1'}`}>
                <img
                    className='card-top-image'
                    src='/src/assets/images/placeholder_image.jpg'
                    alt='placeholder_image'
                />
                <div className='card-info-wrapper'>
                    <div className='card-title-wrapper'>
                        <h2>Un anno tenebroso</h2>
                    </div>

                    {/* <div className='intro-text-wrapper'>
                        <p className='intro-text'>
                            Wikipedia remix. Wikipedia remix. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Wikipedia remix.
                        </p>
                    </div> */}

                    {/* <div className='tags-wrapper'>
                        <div className='tag-box'>A tag 1</div>
                        <div className='tag-box'>Tag tag 2</div>
                        <div className='tag-box'>Third tag</div>
                    </div> */}
                </div>
            </Link>
        </article>
    );
};

export default CardMedium;
