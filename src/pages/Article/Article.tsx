import './Article.scss';
import { useParams, Link } from 'react-router-dom';

import ArticleUnit from '../../components/ArticleUnit/ArticleUnit';

import jsondata from '../../mockdata/contemporary_world_history.json';

const Article = () => {
    const { articleId } = useParams();
    console.log('useparams: articleId:', articleId);

    const concept = jsondata.content.concepts.filter((c) => c.id === articleId)[0];
    console.log('concept:', concept);

    return (
        <>
            <main id='article'>
                <div className='top-image-wrapper'>
                    <img className='top-image' src={concept.image} alt='placeholder_image' />
                </div>

                <div className='article-main-wrapper'>
                    <div className='article-header'>
                        <div className='card-title-wrapper'>
                            <h2>{concept.title}</h2>
                        </div>
                        <div className='card-subtitle-wrapper'>
                            {concept.subtitle && <div className='subtitle'>{concept.subtitle}</div>}
                        </div>
                    </div>

                    <div className='article-body-wrapper'>
                        {concept.content.structure.map((item) => {
                            return <ArticleUnit key={item.position || item.id} type={item.type} data={item.content} />;
                        })}
                    </div>
                </div>
            </main>
        </>
    );
};

export default Article;
