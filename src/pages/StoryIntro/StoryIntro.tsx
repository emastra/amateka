import './StoryIntro.scss';
import { Link, useParams } from 'react-router-dom';

const StoryIntro = () => {
    return (
        <>
            <main id='story-intro'>
                <img
                    className='intro-top-image'
                    src='/src/assets/images/placeholder_image.jpg'
                    alt='placeholder_image'
                />
                <div className='intro-info-wrapper'>
                    <div className='intro-title-wrapper'>
                        <h2>Storia Contemporanea</h2>
                    </div>
                    <div className='i-wrapper'>
                        <ol>
                            <li>
                                <img className='info-icon' src='/src/assets/svg/info-circle.svg' alt='info' />
                                <span>Lorem ipsum dolor sit.</span>
                            </li>
                            <li>
                                <img className='info-icon' src='/src/assets/svg/info-circle.svg' alt='info' />
                                <span>Lorem ipsum dolor sit amet.</span>
                            </li>
                        </ol>
                    </div>
                    <div className='text-wrapper'>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vehicula at elit quis iaculis.
                            Phasellus ullamcorper risus et pellentesque dignissim. Sed leo orci, ullamcorper et dolor
                            nec, luctus maximus ipsum.
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vehicula at elit quis iaculis.
                            Phasellus ullamcorper risus et pellentesque dignissim. Sed leo orci, ullamcorper et dolor
                            nec, luctus maximus ipsum.
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vehicula at elit quis iaculis.
                            Phasellus ullamcorper risus et pellentesque dignissim. Sed leo orci, ullamcorper et dolor
                            nec, luctus maximus ipsum.
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vehicula at elit quis iaculis.
                            Phasellus ullamcorper risus et pellentesque dignissim. Sed leo orci, ullamcorper et dolor
                            nec, luctus maximus ipsum.
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vehicula at elit quis iaculis.
                            Phasellus ullamcorper risus et pellentesque dignissim. Sed leo orci, ullamcorper et dolor
                            nec, luctus maximus ipsum.
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vehicula at elit quis iaculis.
                            Phasellus ullamcorper risus et pellentesque dignissim. Sed leo orci, ullamcorper et dolor
                            nec, luctus maximus ipsum.
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vehicula at elit quis iaculis.
                            Phasellus ullamcorper risus et pellentesque dignissim. Sed leo orci, ullamcorper et dolor
                            nec, luctus maximus ipsum.
                        </p>
                    </div>
                    <div className='enter-btn-wrapper'>
                        {/* controlla la 2a var dal default scelto */}
                        <Link to={`/story/${'1'}/${'years'}`} className='enter-btn'>
                            Entra
                        </Link>
                    </div>
                </div>
            </main>
        </>
    );
};

export default StoryIntro;
