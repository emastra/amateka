import './Article.scss';
import { useParams } from 'react-router-dom';

const Article = () => {
    const { articleId } = useParams();
    console.log('useparams: articleId:', articleId);

    return (
        <>
            <main id='article'>article body</main>
        </>
    );
};

export default Article;
