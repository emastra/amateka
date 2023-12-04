import './Article.scss';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

import ArticleUnit from '../../components/ArticleUnit/ArticleUnit';

import jsondata from '../../mockdata/storia_contemporanea.json';

import useArticleMenusContext from '../../hooks/useArticleMenusContext';

import ContentMenu from '../../components/ContentMenu/ContentMenu';
import ColorMenu from '../../components/ColorMenu/ColorMenu';

const Article = () => {
    const { articleId } = useParams();
    console.log('useparams: articleId:', articleId);

    const concept = jsondata.content.concepts.filter((c) => c.id === articleId)[0];
    console.log('concept:', concept);

    const { isContentMenuOpen, isColorMenuOpen, isFontMenuOpen, isMoreMenuOpen } = useArticleMenusContext();

    return (
        <>
            {isContentMenuOpen && <ContentMenu />}
            {isColorMenuOpen && <ColorMenu />}

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
