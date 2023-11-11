import './Article.scss';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

import ArticleUnit from '../../components/ArticleUnit/ArticleUnit';

import jsondata from '../../mockdata/storia_contemporanea.json';

const Article = () => {
    const { articleId } = useParams();
    console.log('useparams: articleId:', articleId);

    const concept = jsondata.content.concepts.filter((c) => c.id === articleId)[0];
    console.log('concept:', concept);

    // const textData = [
    //     "Lorem ipsum <a href=''>dolor</a> sit amet, consectetur adipiscing elit. Fusce ut turpis eget nunc volutpat vulputate quis non nulla. Cras non euismod lorem, ut tincidunt libero. Proin vitae sem suscipit, pharetra nisi ac, sollicitudin augue. Fusce ut turpis eget nunc volutpat vulputate quis non nulla. Cras non euismod lorem, ut tincidunt libero. Proin vitae sem suscipit, pharetra nisi ac, sollicitudin augue.",
    //     'Lorem ipsum  dolor sit amet, consectetur adipiscing elit. Fusce ut turpis eget nunc volutpat vulputate quis non nulla. Cras non euismod lorem, ut tincidunt libero. Proin vitae sem suscipit, pharetra nisi ac, sollicitudin augue',
    // ];

    // const chapterTitleData = 'Un chapter title test';

    // const imageData = {
    //     url: '/src/assets/images/ann-ann.jpg',
    //     caption: 'Lorem ipsum  dolor sit amet, consectetur adipiscing elit. Lorem ipsum  dolor sit amet.',
    // };

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
                        {concept.articleContent.structure.map((item) => {
                            return <ArticleUnit key={item.id} type={item.type} data={item.content} />;
                        })}
                    </div>
                </div>
            </main>
        </>
    );
};

export default Article;
