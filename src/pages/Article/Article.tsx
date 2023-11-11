import './Article.scss';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

import Text from './components/Text';
import Accordion from './components/Accordion';
import ChapterTitle from './components/ChapterTitle/ChapterTitle';
import Image from './components/Image';
import SectionTitle from './components/SectionTitle/SectionTitle';

import jsondata from '../../mockdata/storia_contemporanea.json';

const Article = () => {
    const { articleId } = useParams();
    console.log('useparams: articleId:', articleId);

    const concept = jsondata.content.concepts[0];
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
                            // item.type
                            return null;
                        })}

                        {/* create ArticleItems component, same technique as TimelineCards!! */}

                        {/* <Text data={textData} />
                        <Accordion items={[{ title: 'quick facts', content: 'test content' }]} />
                        <Text data={textData} />
                        <ChapterTitle data={chapterTitleData} />
                        <Text data={textData} />
                        <Image data={imageData} />
                        <Text data={textData} />
                        <SectionTitle data={chapterTitleData} />
                        <Text data={textData} /> */}
                    </div>
                </div>
            </main>
        </>
    );
};

export default Article;
