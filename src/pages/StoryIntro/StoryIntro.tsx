import './StoryIntro.scss';
import { useState, useEffect } from 'react';
import { Link, useParams, useLocation } from 'react-router-dom';

import ArticleUnit from '../../components/ArticleUnit/ArticleUnit';

const IMAGE_BASE_URL = '/src/assets/images/';

const StoryIntro = () => {
    const { id } = useParams();
    if (!id) return;

    const location = useLocation();
    const currentStory = location.state?.currentStory;
    console.log('##! currentStory', currentStory);

    const [loading, setLoading] = useState(true);
    const [data, setData] = useState<any>(null);

    useEffect(() => {
        if (currentStory) {
            setData(currentStory);
            setLoading(false);
        } else {
            // do same call to firestore as in Home
        }
    }, []);

    return (
        <>
            <main id='story-intro'>
                {!loading && data && (
                    <>
                        <div className='intro-image-wrapper'>
                            {data.image ? (
                                <img className='intro-top-image' src={IMAGE_BASE_URL + data.image} alt='image' />
                            ) : (
                                <img
                                    className='intro-top-image'
                                    src='/src/assets/images/placeholder_image.jpg'
                                    alt='placeholder_image'
                                />
                            )}
                        </div>

                        <div className='intro-info-wrapper'>
                            <div className='intro-title-wrapper'>
                                <h2>{data.title}</h2>
                            </div>
                            <div className='i-wrapper'>
                                <ol>
                                    {data.intro.info.map((infoText, i) => (
                                        <li key={i}>
                                            <img
                                                className='info-icon'
                                                src='/src/assets/svg/info-circle.svg'
                                                alt='info'
                                            />
                                            <span>{infoText}</span>
                                        </li>
                                    ))}
                                </ol>
                            </div>
                            <div className='text-wrapper'>
                                <ArticleUnit type='text' data={data.intro.text} />
                            </div>

                            {/* controlla la 2a var dal default scelto */}
                            <div className='enter-btn-wrapper'>
                                <Link to={`/story/${id}/screen/${'events'}`} className='enter-btn'>
                                    Entra
                                </Link>
                            </div>
                        </div>
                    </>
                )}
            </main>
        </>
    );
};

export default StoryIntro;
