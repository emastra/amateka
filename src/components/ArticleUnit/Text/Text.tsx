import './Text.scss';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Text = ({ data }) => {
    const paragraphs = data.split('\n');

    return (
        <>
            <div className='text-container'>
                {paragraphs.map((paragraph) => {
                    return <p>{paragraph}</p>;
                })}
            </div>
        </>
    );
};

export default Text;
