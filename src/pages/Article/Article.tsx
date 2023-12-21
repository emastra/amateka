import './Article.scss';
import { useParams, Link, useLocation } from 'react-router-dom';

const IMAGE_BASE_URL = '/src/assets/images/';

import ArticleUnit from '../../components/ArticleUnit/ArticleUnit';

const Article = () => {
    const { articleId } = useParams();
    console.log('useparams: articleId:', articleId);

    const location = useLocation();
    const articleData = location.state?.articleData;
    console.log('articleData:', articleData);

    const imageUrl = IMAGE_BASE_URL + (articleData.image || 'placeholder_image.jpg');

    // const [loading, setLoading] = useState(true);
    // const [data, setData] = useState<any>(null);

    // useEffect(() => {
    //     if (currentStory) {
    //         setData(currentStory);
    //         setLoading(false);
    //     } else {
    //         // do same call to firestore as in Home
    //     }
    // }, []);

    const handleImageError = (e) => {
        e.target.src = IMAGE_BASE_URL + 'placeholder_image.jpg';
    };

    return (
        <>
            <main id='article'>
                <div className='top-image-wrapper'>
                    <img className='top-image' src={imageUrl} onError={handleImageError} alt='article_image' />
                </div>

                <div className='article-main-wrapper'>
                    <div className='article-header'>
                        <div className='card-title-wrapper'>
                            <h2>{articleData.title}</h2>
                        </div>
                        <div className='card-subtitle-wrapper'>
                            {articleData.subtitle && <div className='subtitle'>{articleData.subtitle}</div>}
                        </div>
                    </div>

                    <div className='article-body-wrapper'>
                        {articleData.content.structure.map((item) => {
                            return <ArticleUnit key={item.position || item.id} type={item.type} data={item.content} />;
                        })}
                    </div>
                </div>
            </main>
        </>
    );
};

export default Article;
