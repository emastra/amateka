import './ChapterTitle.scss';

const ChapterTitle = ({ data }) => {
    // dove usare h1 e h2?
    console.log('!!', data);
    return (
        <>
            <div className='chapter-title-container'>
                <div className='chapter-title'>{data}</div>
            </div>
        </>
    );
};

export default ChapterTitle;
