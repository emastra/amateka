import './SectionTitle.scss';

const SectionTitle = ({ data }) => {
    // dove usare h1 e h2?
    // console.log('!!', data);

    return (
        <>
            <div className='section-title-container'>
                <div className='section-title'>{data}</div>
            </div>
        </>
    );
};

export default SectionTitle;
