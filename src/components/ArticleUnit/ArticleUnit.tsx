import Text from './Text';
import Accordion from './Accordion';
import ChapterTitle from './ChapterTitle';
import Image from './Image';
import SectionTitle from './SectionTitle';

interface ArticleUnitProps {
    type: string; //'accordion' | 'chapterTitle' | 'image' | 'list' | 'sectionTitle' | 'text';
    data: any;
}

const ArticleUnit: React.FC<ArticleUnitProps> = ({ type, data }) => {
    if (type === 'accordion') {
        return <Accordion items={[]} />;
    }

    if (type === 'mainTitle') {
        return <ChapterTitle data={data} />;
    }

    if (type === 'image') {
        return <Image data={data} />;
    }

    if (type === 'list') {
        return <div>List is a working progress</div>;
    }

    if (type === 'secondaryTitle') {
        return <SectionTitle data={data} />;
    }

    if (type === 'text') {
        return <Text data={data} />;
    }

    console.error('Provided type does not exist');
    return null;
};

export default ArticleUnit;
