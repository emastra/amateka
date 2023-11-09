import './Image.scss';

const Image = ({ data }) => {
    console.log('!!', data);

    return (
        <>
            <div className='image-container'>
                <div className='img-wrapper'>
                    <img src={data.url} alt='image' />
                </div>
                <div className='caption-wrapper'>
                    <caption>{data.caption}</caption>
                </div>
            </div>
        </>
    );
};

export default Image;
