import './Article.scss';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Article = () => {
    const { articleId } = useParams();
    console.log('useparams: articleId:', articleId);

    return (
        <>
            <main id='article'>
                <div className='top-image-wrapper'>
                    <img className='top-image' src='/src/assets/images/ann-ann.jpg' alt='placeholder_image' />
                </div>

                <div className='article-main-wrapper'>
                    <div className='article-header'>
                        <div className='card-title-wrapper'>
                            <h2>Test titolo</h2>
                        </div>
                        <div className='card-subtitle-wrapper'>
                            {true && (
                                <div className='subtitle'>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vehicula at elit quis
                                    iaculis.
                                </div>
                            )}
                        </div>
                    </div>

                    <div className='article-body-wrapper'>
                        <p>
                            Lorem ipsum <a href=''>dolor</a> sit amet, consectetur adipiscing elit. Vestibulum quis
                            tellus blandit.
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
                </div>
            </main>
        </>
    );
};

export default Article;
