import './Text.scss';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Text = ({ data }) => {
    return (
        <>
            <div className='text-container'>
                {data.map((paragraphContent) => {
                    return <p>{paragraphContent}</p>;
                })}
            </div>
        </>
    );
};

export default Text;
