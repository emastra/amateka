import './Article.scss';
import { useParams } from 'react-router-dom';

const Article = () => {
    const { articleId } = useParams();
    console.log('useparams: articleId:', articleId);

    return (
        // story-events che fa i margini dovrebbe esse una class generale, la usano pure le varie pagine delle cards.
        <>
            <main id='story-events'>article body</main>
        </>
    );
};

export default Article;
